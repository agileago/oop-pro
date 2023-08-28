import { Autobind, Mut, VueService } from 'vue3-oop'
import { useDark } from '@vueuse/core'
import config from '@/config'

export interface ThemeConfig {
  theme: 'light' | 'dark'
  /* 色弱模式 */
  colorWeak: boolean
  /* 是否有顶部菜单栏，通常用于系统嵌入其他系统 */
  navbar: boolean
  /* 是否有左侧菜单栏 */
  menu: boolean
  /* 菜单是否在顶部 */
  topMenu: boolean
  /* 是否隐藏抽屉菜单，主要在移动端上 */
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
}

@Autobind()
export class ThemeService extends VueService {
  constructor() {
    super()
  }

  @Mut() theme: ThemeConfig = {
    theme: 'light',
    colorWeak: false,
    navbar: true,
    menu: true,
    topMenu: false,
    hideMenu: false,
    menuCollapse: false,
    footer: true,
    themeColor: '#165DFF',
    menuWidth: 220,
    globalSettings: false,
    device: 'desktop',
    tabBar: false,
  }

  isDark = useDark({
    selector: 'body',
    attribute: 'arco-theme',
    valueDark: 'dark',
    valueLight: 'light',
    storageKey: config.storageKey.theme,
    onChanged: (dark: boolean) => {
      // 这里会立即执行
      this.toggleTheme(dark)
    },
  })

  toggleTheme(dark: boolean) {
    if (dark) {
      this.theme.theme = 'dark'
      document.body.setAttribute('arco-theme', 'dark')
    } else {
      this.theme.theme = 'light'
      document.body.removeAttribute('arco-theme')
    }
  }

  toggleDrawerMenu() {}
}
