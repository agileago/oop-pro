import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: 'list',
    children: [
      {
        path: 'search-table',
        name: 'Workplace',
        component: () => import('./search-table/search-table.view'),
        meta: {
          title: '查询表格',
          tabbar: true,
        },
      },
    ],
  },
]

// @ts-ignore
routes.parent = 'main'

export default routes
