import { Autobind, Mut, VueService } from 'vue3-oop'
import { useDark } from '@vueuse/core'
import config from '@/config'

export interface ThemeConfig {
  theme: 'light' | 'dark'
  colorWeak: boolean
  navbar: boolean
  menu: boolean
  topMenu: boolean
  hideMenu: boolean
  menuCollapse: boolean
  footer: boolean
  themeColor: string
  menuWidth: number
  globalSettings: boolean
  device: 'desktop' | 'mobile'
  tabBar: boolean
  menuFromServer: boolean
  serverMenu: any[]
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
    menuFromServer: false,
    serverMenu: [],
  }

  isDark = useDark({
    selector: 'body',
    attribute: 'arco-theme',
    valueDark: 'dark',
    valueLight: 'light',
    storageKey: config.storageKey.theme,
    onChanged: (dark: boolean) => {
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
