import type { RouteModule } from '@/router/type'

const routes: RouteModule = [
  {
    path: '/:pathMatch(.*)*',
    name: 'notFound',
    component: () => import('./not-found/index.view'),
  },
]

export default routes
