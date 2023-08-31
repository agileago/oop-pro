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
import styles from './main.module.scss'
import { NavMenu } from './navmenu'
import { RouterView } from 'vue-router'
import { Suspense } from 'vue'
import { Tabbar } from './tabbar'
import { Footer } from '@/layout/main/footer'
import { TransitionFade } from '@morev/vue-transitions'

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
                class={styles.layoutSider}
                style={{
                  paddingTop: theme.navbar ? `${theme.navBarHeight}px` : '',
                }}
              >
                <div class={`${styles.menuWrapper}`}>
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
