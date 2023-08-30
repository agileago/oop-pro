import { Autobind, Computed, injectService, Mut, VueComponent } from 'vue3-oop'
import { Link, Menu, MenuItem, SubMenu } from '@arco-design/web-vue'
import { ThemeService } from '@/theme/theme.service'
import { UserService } from '@/auth/user.service'
import type { IMenuItem } from '@/types'
import type { VNodeChild } from 'vue'
import { If } from '@/common/component/if'
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
  }

  @Mut() selectedKey: string[] = [this.route.path]

  handleMenuClick(menuItem: IMenuItem) {
    console.log(menuItem)
    this.selectedKey = [menuItem.name]
  }

  renderSubMenu() {
    const travel = (items: IMenuItem[], nodes = []) => {
      if (items) {
        items.forEach(element => {
          const icon = element.icon ? () => element.icon : null
          const hasChild = element.children && element.children.length > 0

          let node: VNodeChild
          if (hasChild) {
            node = (
              <SubMenu
                key={element.name}
                title={element.name}
                v-slots={{ icon }}
              >
                {travel(element.children!)}
              </SubMenu>
            )
          } else {
            node = (
              <MenuItem key={element.path} v-slots={{ icon }}>
                <If condition={!element.isLink}>
                  <RouterLink
                    to={element.path!}
                    // @ts-ignore
                    onClick={() => this.handleMenuClick(element)}
                  >
                    {element.name}
                  </RouterLink>
                </If>
                <If condition={element.isLink}>
                  <Link
                    href={element.path}
                    // @ts-ignore
                    target={'_blank'}
                  >
                    {element.name}
                  </Link>
                </If>
              </MenuItem>
            )
          }
          nodes.push(node as never)
        })
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
    if (this.ts.isMobile.value) return false
    return this.theme.menuCollapse
  }

  set collapse(val: boolean) {
    this.theme.menuCollapse = val
  }

  render() {
    const { theme } = this
    console.log('aaaa', theme.menuCollapse)
    return (
      <Menu
        mode={theme.topMenu ? 'horizontal' : 'vertical'}
        v-model:collapsed={this.collapse}
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
