import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/demo/home',
    component: () => import('./home/home.view'),
  },
  {
    path: '/demo/count',
    component: () => import('./count/count.view'),
  },
]

// @ts-ignore
routes.parent = 'main'

export default routes
