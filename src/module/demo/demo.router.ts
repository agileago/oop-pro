import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/home',
    component: () => import('./home/home.view'),
  },
  {
    path: '/count',
    component: () => import('./count/count.view'),
  },
]

// @ts-ignore
routes.parent = 'main'

export default routes
