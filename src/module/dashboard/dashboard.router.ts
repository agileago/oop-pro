import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: 'dashboard',
    children: [
      {
        path: 'workplace',
        name: 'Workplace',
        component: () => import('./workspace/workspace.view'),
        meta: {
          title: '工作台',
          tabbar: true,
        },
      },
      {
        path: 'monit',
        name: 'Monit',
        component: () => import('./monit/monit.view'),
        meta: {
          title: '实时监控',
          tabbar: true,
        },
      },
    ],
  },
]

// @ts-ignore
routes.parent = 'main'

export default routes
