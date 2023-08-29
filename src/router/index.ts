import { createRouter, createWebHistory } from 'vue-router'
import config from '@/config'
import { routes } from '@/router/routes'

export function createMainRouter() {
  const history = createWebHistory(config.BASE_ROUTE)
  const router = createRouter({
    history,
    routes,
    scrollBehavior(to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition
      } else {
        return { top: 0 }
      }
    },
  })

  // 设置页面标题
  router.afterEach(to => {
    document.title = to.meta.title || config.site.name
  })

  return {
    router,
    history,
  }
}
