import { Component, VueComponent } from 'vue3-oop'
import {
  Drawer,
  Layout,
  LayoutContent,
  LayoutSider,
} from '@arco-design/web-vue'
import { Navbar } from './navbar'
import { ThemeService } from '@/layout/main/theme.service'
import { If } from '@/common/component/if'
import { NavMenu } from './navmenu'
import { RouterView } from 'vue-router'
import { Suspense } from 'vue'
import { Tabbar } from './tabbar'
import { Footer } from '@/layout/main/footer'
import { TransitionFade } from '@morev/vue-transitions'
import { Setting } from '@/layout/main/setting'
import { css, createStyles } from '@/common/util/cssr'

const styles = createStyles({
  layoutSider: [
    css('& > .arco-layout-sider-children', {
      overflowY: 'hidden',
    }),
  ],
  menuWrapper: [
    css('.arco-menu', [
      css('::-webkit-scrollbar', {
        width: '12px',
        height: '4px',
      }),
      css('::-webkit-scrollbar-thumb', {
        border: '4px solid transparent',
        backgroundClip: 'padding-box',
        borderRadius: '7px',
        backgroundColor: 'var(--color-text-4)',
      }),
      css('::-webkit-scrollbar-thumb:hover', {
        backgroundColor: 'var(--color-text-3)',
      }),
    ]),
  ],
  drawer: [css('.arco-drawer-body', { padding: 0 })],
})

@Component()
export default class MainLayout extends VueComponent {
  constructor(private ts: ThemeService) {
    super()
  }

  render() {
    const { ts } = this
    const { theme } = ts

    return (
      <Layout class={'h-full w-full'}>
        <Setting></Setting>
        <If condition={theme.navbar}>
          <div
            class={'fixed left-0 top-0 z-[100] w-full'}
            style={`height:${theme.navBarHeight}px`}
          >
            <Navbar></Navbar>
          </div>
        </If>
        <Layout>
          <Layout>
            <If condition={ts.renderLeftMenu}>
              <LayoutSider
                v-show={!theme.hideMenu}
                breakpoint={'xl'}
                collapsible
                collapsed={theme.menuCollapse}
                width={theme.menuWidth}
                hideTrigger
                onCollapse={val => (theme.menuCollapse = val)}
                class={`ease-[cubic-bezier(0.34, 0.69, 0.1, 1)] fixed left-0 top-0 z-[99] h-full transition-all duration-200 after:absolute after:right-[-1px] after:top-0 after:block after:h-full after:w-[1px] after:bg-[--color-border] after:content-[""] ${styles.layoutSider}`}
                style={{
                  paddingTop: theme.navbar ? `${theme.navBarHeight}px` : '',
                }}
              >
                <div
                  class={`h-full overflow-auto overflow-x-hidden ${styles.menuWrapper}`}
                >
                  <NavMenu></NavMenu>
                </div>
              </LayoutSider>
            </If>
            <If condition={theme.hideMenu}>
              <Drawer
                class={styles.drawer}
                visible={theme.drawerVisible}
                placement={'left'}
                header={false}
                footer={false}
                maskClosable
                closable={false}
                onCancel={() => (theme.drawerVisible = false)}
              >
                <NavMenu></NavMenu>
              </Drawer>
            </If>
            <Layout
              class={
                'min-h-screen overflow-y-hidden bg-[--color-fill-2] transition-[padding] duration-[0.2s] ease-[cubic-bezier(0.34,0.69,0.1,1)]'
              }
              style={ts.layoutContentStyle}
            >
              <If condition={theme.tabBar}>
                <Tabbar />
              </If>
              <LayoutContent>
                <RouterView>
                  {{
                    default: ({ Component, route }: any) => {
                      if (!Component) return null
                      return (
                        <TransitionFade mode={'out-in'} appear>
                          <Suspense>
                            <Component
                              key={route.fullPath + ts.pageKey}
                            ></Component>
                          </Suspense>
                        </TransitionFade>
                      )
                    },
                  }}
                </RouterView>
              </LayoutContent>
              <If condition={theme.footer}>
                <Footer />
              </If>
            </Layout>
          </Layout>
        </Layout>
      </Layout>
    )
  }
}
