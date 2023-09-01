import { Autobind, Computed, Mut, VueService } from 'vue3-oop'
import { breakpointsTailwind, useBreakpoints, useDark } from '@vueuse/core'
import config from '@/config'
import { watch } from 'vue'

export interface ThemeConfig {
  theme: 'light' | 'dark'
  /* 色弱模式 */
  colorWeak: boolean
  /* 是否有顶部菜单栏，通常用于系统嵌入其他系统 */
  navbar: boolean
  /* 顶部导航栏高度 */
  navBarHeight: number
  /* 是否有左侧菜单栏 */
  menu: boolean
  /* 菜单是否在顶部 */
  topMenu: boolean
  /* 是否隐藏菜单显示抽屉菜单，主要在移动端上 */
  hideMenu: boolean
  /* 菜单是否折叠 */
  menuCollapse: boolean
  /* 是否显示底部条 */
  footer: boolean
  themeColor: string
  menuWidth: number
  globalSettings: boolean
  device: 'desktop' | 'mobile'
  /* 是否显示菜单历史记录 */
  tabBar: boolean
  /* 抽屉是否展示 */
  drawerVisible: boolean
}

@Autobind()
export class ThemeService extends VueService {
  @Mut() theme: ThemeConfig = {
    theme: 'light',
    colorWeak: false,
    navbar: true,
    navBarHeight: 60,
    menu: true,
    topMenu: false,
    hideMenu: false,
    menuCollapse: false,
    footer: true,
    themeColor: '#165DFF',
    menuWidth: 220,
    globalSettings: false,
    device: 'desktop',
    tabBar: true,
    drawerVisible: false,
  }

  /* 是否渲染左侧菜单 */
  @Computed()
  get renderLeftMenu() {
    return this.theme.menu && !this.theme.topMenu
  }

  /* 左侧菜单宽度 */
  @Computed()
  get menuWidth() {
    return this.theme.menuCollapse ? 48 : this.theme.menuWidth
  }

  /* 内容区域的padding */
  @Computed()
  get layoutContentStyle() {
    return {
      paddingLeft:
        this.renderLeftMenu && !this.theme.hideMenu
          ? `${this.menuWidth}px`
          : '',
      paddingTop: this.theme.navbar ? `${this.theme.navBarHeight}px` : '',
    }
  }

  isDark = useDark({
    selector: 'body',
    attribute: 'arco-theme',
    valueDark: 'dark',
    valueLight: 'light',
    storageKey: config.storageKey.theme,
    onChanged: (dark: boolean) => {
      // 这里会立即执行
      if (dark) {
        this.theme.theme = 'dark'
        document.body.setAttribute('arco-theme', 'dark')
      } else {
        this.theme.theme = 'light'
        document.body.removeAttribute('arco-theme')
      }
    },
  })

  /* 响应式 */
  breakpoint = useBreakpoints(breakpointsTailwind)
  isMobile = this.breakpoint.smaller('md')
  sizeChange() {
    const isMobile = this.isMobile.value
    this.theme.device = isMobile ? 'mobile' : 'desktop'
    this.theme.hideMenu = isMobile
    if (isMobile) this.theme.menuCollapse = false
  }

  /*刷新页面*/
  @Mut() pageKey = Math.random()

  refreshPageKey() {
    this.pageKey = Math.random()
  }

  toggleDrawerMenu() {
    this.theme.drawerVisible = !this.theme.drawerVisible
  }

  constructor() {
    super()
    watch(this.isMobile, this.sizeChange, { immediate: true })
    // 色弱模式
    watch(
      () => this.theme.colorWeak,
      () => {
        document.body.style.filter = this.theme.colorWeak
          ? 'invert(80%)'
          : 'none'
      },
      { immediate: true },
    )
  }
}
