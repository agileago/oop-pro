import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: 'dashboard',
    children: [
      {
        path: 'workplace',
        name: 'Workplace',
        component: () => import('./workspace/workspace.view'),
      },
    ],
  },
]

// @ts-ignore
routes.parent = 'main'

export default routes
