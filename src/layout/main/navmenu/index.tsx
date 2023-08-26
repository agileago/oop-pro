import { Autobind, injectService, Mut, VueComponent } from 'vue3-oop'
import { Link, Menu, MenuItem, SubMenu } from '@arco-design/web-vue'
import { ThemeService } from '@/theme/theme.service'
import { UserService } from '@/auth/user.service'
import type { IMenuItem } from '@/types'
import type { VNodeChild } from 'vue'
import { If } from '@/common/component/if'
import { RouterLink, useRouter } from 'vue-router'
import { watch } from 'vue'

@Autobind()
export class NavMenu extends VueComponent {
  ts = injectService(ThemeService)
  us = injectService(UserService)
  router = useRouter()

  constructor() {
    super()
    watch(() => this.router.currentRoute.value, this.refreshKey, {
      immediate: true,
    })
  }

  refreshKey() {
    // const path = this.router.currentRoute.value.fullPath
  }

  @Mut() openKeys: string[] = []
  @Mut() selectedKey: string[] = []

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
              <MenuItem key={element.name} v-slots={{ icon }}>
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

  render() {
    const { ts } = this
    const { theme } = ts
    return (
      <Menu
        mode={theme.topMenu ? 'horizontal' : 'vertical'}
        v-model:collapsed={theme.menuCollapse}
        v-model:openKeys={this.openKeys}
        // @ts-ignore
        showCollapseButton={theme.device !== 'mobile'}
        autoOpen={false}
        selectedKeys={this.selectedKey}
        autoOpenSelected
        levelIndent={34}
        class={'h-full w-full'}
        onCollapse={(val: boolean) => (theme.menuCollapse = val)}
      >
        {this.renderSubMenu()}
      </Menu>
    )
  }
}
