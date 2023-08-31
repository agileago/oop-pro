import logo from '@/assets/logo.svg'
export default class Config {
  env = import.meta.env.MODE
  // 基础路由 /app/
  BASE_ROUTE = import.meta.env.VUE_APP_BASE_ROUTE
  // 静态资源路径
  BASE_URL = import.meta.env.VUE_APP_BASE_URL
  // 后端API
  API = this.BASE_ROUTE + 'api'

  // 本地存储key
  storageKey = {
    token: 'arco_token',
    theme: 'arco_theme',
    loginConf: 'arco_login_conf',
    tagList: 'arco_tag_list',
  }
  // 存储过期时间 5day
  storageExpire = 5 * 24 * 60 * 60

  site = {
    logo,
    name: 'Arco Design Pro',
    foot: 'Arco Pro',
  }
}
