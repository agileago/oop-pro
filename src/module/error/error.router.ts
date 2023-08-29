import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/:pathMatch(.*)*',
    name: 'notFound',
    component: () => import('./not-found/index.view'),
  },
]

export default routes
