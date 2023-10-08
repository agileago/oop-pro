import type { RouteModule } from '@/router/type'

const routes: RouteModule = [
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

routes.parent = 'main'

export default routes
