import { Autobind, VueService } from 'vue3-oop'
import { useRouter } from 'vue-router'
import { storage } from '@/common/util/storage'
import config from '@/config'
import { Message } from '@arco-design/web-vue'
import type { IMenuItem } from '@/types'
import { IconDashboard, IconLink, IconList } from '@arco-design/web-vue/es/icon'
import { delay } from '@/common/util'

@Autobind()
export class UserService extends VueService {
  constructor() {
    super()
    this.guardRouter()
  }

  router = useRouter()

  token = storage.getItem(config.storageKey.token)

  // 用户菜单
  menus: IMenuItem[] = [
    {
      name: '仪表盘',
      icon: <IconDashboard size={18} />,
      children: [
        { name: '工作台', path: '/dashboard/workplace' },
        { name: '实时监控', path: '/dashboard/monit' },
      ],
    },
    {
      name: '列表页',
      icon: <IconList size={18} />,
      children: [
        { name: '查询表格', path: '/list/search-table' },
        { name: '卡片列表', path: '/list/card' },
      ],
    },
    {
      name: 'Arco Design',
      path: 'https://arco.design',
      isLink: true,
      icon: <IconLink size={18} />,
    },
  ]

  guardRouter() {
    const { router } = this
    router.beforeEach(async to => {
      if (to.meta.auth === false) return
      if (!this.token) return { path: '/login', replace: true }
    })
  }

  async login(model: any) {
    console.log(model)
    await delay(4000)
    this.token = Math.random().toString()
    storage.setItem(config.storageKey.token, this.token, config.storageExpire)
    Message.success('欢迎使用')
    this.router.replace({ name: 'Workplace' })
  }

  logout() {
    storage.removeItem(config.storageKey.token)
    location.href = config.BASE_ROUTE + 'login'
  }
}
