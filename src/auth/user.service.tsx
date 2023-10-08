import { Autobind, VueService } from 'vue3-oop'
import { useRouter } from 'vue-router'
import { storage } from '@/common/util/storage'
import config from '@/config'
import { Message } from '@arco-design/web-vue'
import { IconLink, IconList } from '@arco-design/web-vue/es/icon'
import { delay } from '@/common/util'
import type { IMenuItem } from '@/router/type'

const findMenuOpenKeysMap = (menuTree: IMenuItem[]) => {
  const result = new Map<string, string[]>()
  const backtrack = (item: IMenuItem, keys: string[]) => {
    if (item.children?.length) {
      item.children.forEach(el => {
        backtrack(el, [...keys, el.path || el.name])
      })
    } else {
      if (item.path) result.set(item.path, keys)
    }
  }
  menuTree.forEach(el => backtrack(el, [el.path || el.name]))
  return result
}

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
      name: '列表页',
      icon: <IconList size={18} />,
      children: [{ name: '查询表格', path: '/list/search-table' }],
    },
    {
      name: '外部链接',
      icon: <IconLink size={18} />,
      children: [
        {
          name: 'Arco Design',
          path: 'https://arco.design',
          isLink: true,
        },
      ],
    },
  ]
  // 末尾菜单路径对应的打开菜单的key
  menusPathOpenKeys = findMenuOpenKeysMap(this.menus)

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
