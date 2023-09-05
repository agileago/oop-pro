import { Autobind, Computed, injectService, Mut, VueComponent } from 'vue3-oop'
import { Link, Menu, MenuItem, SubMenu } from '@arco-design/web-vue'
import { ThemeService } from '@/layout/main/theme.service'
import { UserService } from '@/auth/user.service'
import type { IMenuItem } from '@/types'
import type { VNodeChild } from 'vue'
import { RouterLink, useRoute, useRouter } from 'vue-router'
import { watch } from 'vue'

@Autobind()
export class NavMenu extends VueComponent {
  ts = injectService(ThemeService)
  us = injectService(UserService)
  router = useRouter()
  route = useRoute()
  theme = this.ts.theme

  constructor() {
    super()
    watch(() => this.route.path, this.refreshKey)
  }

  refreshKey() {
    this.selectedKey = [this.route.path]
    const newKeys = this.us.menusPathOpenKeys.get(this.route.path) || []
    const openKeys = new Set([...newKeys, ...this.openKeys])
    this.openKeys = [...openKeys]
  }

  @Mut() selectedKey: string[] = [this.route.path]
  @Mut() openKeys: string[] = (
    this.us.menusPathOpenKeys.get(this.route.path) || []
  ).concat()

  renderSubMenu() {
    const travel = (items: IMenuItem[], nodes = []) => {
      for (const element of items) {
        const icon = element.icon ? () => element.icon : null
        const hasChild = element.children && element.children.length > 0

        let node: VNodeChild
        if (hasChild) {
          node = (
            <SubMenu
              key={element.path || element.name}
              title={element.name}
              v-slots={{ icon }}
            >
              {travel(element.children!)}
            </SubMenu>
          )
        } else {
          const menuDom = (
            <MenuItem key={element.path || element.name} v-slots={{ icon }}>
              {element.name}
            </MenuItem>
          )
          if (element.isLink) {
            node = (
              // @ts-ignore
              <Link class={'!block !p-0'} href={element.path} target={'_blank'}>
                {menuDom}
              </Link>
            )
          } else {
            node = (
              <RouterLink to={element.path!} class={'block'}>
                {menuDom}
              </RouterLink>
            )
          }
        }
        nodes.push(node as never)
      }
      return nodes
    }
    return travel(this.us.menus)
  }

  setCollapse(val: boolean) {
    if (!this.ts.isMobile) {
      this.theme.menuCollapse = val
    }
  }

  @Computed()
  get collapse() {
    if (this.ts.isMobile.value || this.ts.theme.topMenu) return false
    return this.theme.menuCollapse
  }
  set collapse(val: boolean) {
    this.theme.menuCollapse = val
  }

  render() {
    const { theme } = this
    return (
      <Menu
        mode={theme.topMenu ? 'horizontal' : 'vertical'}
        v-model:collapsed={this.collapse}
        v-model:openKeys={this.openKeys}
        // @ts-ignore
        showCollapseButton={!this.ts.isMobile.value}
        autoOpen={false}
        selectedKeys={this.selectedKey}
        autoOpenSelected
        levelIndent={34}
        class={'!h-full !w-full'}
        onCollapse={this.setCollapse}
      >
        {this.renderSubMenu()}
      </Menu>
    )
  }
}
