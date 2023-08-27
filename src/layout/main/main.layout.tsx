import { injectService, VueComponent } from 'vue3-oop'
import { Layout, LayoutContent, LayoutSider } from '@arco-design/web-vue'
import { Navbar } from './navbar'
import { ThemeService } from '@/theme/theme.service'
import { If } from '@/common/component/if'
import styles from './main.module.scss'
import { NavMenu } from './navmenu'
import { RouterView } from 'vue-router'
import { Suspense, Transition } from 'vue'

export default class MainLayout extends VueComponent {
  ts = injectService(ThemeService)

  render() {
    const { ts } = this
    const { theme } = ts
    return (
      <Layout class={'h-full w-full'}>
        <div class={'fixed left-0 top-0 z-[100] h-[60px] w-full'}>
          <Navbar></Navbar>
        </div>
        <Layout>
          <Layout>
            <If condition={!theme.topMenu}>
              <LayoutSider
                v-show={!theme.hideMenu}
                breakpoint={'xl'}
                collapsible
                collapsed={theme.menuCollapse}
                width={theme.menuWidth}
                hideTrigger
                onCollapse={val => (theme.menuCollapse = val)}
                class={`${styles.layoutSider} pt-[60px]`}
              >
                <div class={`${styles.menuWrapper}`}>
                  <NavMenu></NavMenu>
                </div>
              </LayoutSider>
            </If>
            <Layout
              class={
                'min-h-screen overflow-y-hidden bg-[--color-fill-2] transition-[padding] duration-[0.2s] ease-[cubic-bezier(0.34,0.69,0.1,1)]'
              }
              style={{
                paddingLeft: theme.menuWidth + 'px',
                paddingTop: '60px',
              }}
            >
              <LayoutContent>
                <RouterView>
                  {{
                    default: ({ Component, route }: any) => {
                      if (!Component) return null
                      return (
                        <Transition name={'fade'} mode={'out-in'} appear>
                          <Suspense>
                            <Component key={route.fullPath}></Component>
                          </Suspense>
                        </Transition>
                      )
                    },
                  }}
                </RouterView>
              </LayoutContent>
            </Layout>
          </Layout>
        </Layout>
      </Layout>
    )
  }
}
