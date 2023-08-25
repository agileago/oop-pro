import { Autobind, VueService } from 'vue3-oop'
import { useRouter } from 'vue-router'
import { storage } from '@/common/util/storage'
import config from '@/config'

function delay(timeout = 300) {
  return new Promise(r => setTimeout(r, timeout))
}

@Autobind()
export class UserService extends VueService {
  constructor() {
    super()
    this.guardRouter()
  }
  router = useRouter()

  token = storage.getItem(config.storageKey.token)

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
    this.router.replace('/')
  }
}
