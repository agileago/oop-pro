import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: 'list',
    children: [
      {
        path: 'search-table',
        name: 'SearchTable',
        component: () => import('./search-table/search-table.view'),
        meta: {
          title: '查询表格',
          tabbar: true,
        },
      },
      {
        path: 'card',
        name: 'Card',
        component: () => import('./card/card.view'),
        meta: {
          title: '卡片列表',
          tabbar: true,
        },
      },
    ],
  },
]

// @ts-ignore
routes.parent = 'main'

export default routes
