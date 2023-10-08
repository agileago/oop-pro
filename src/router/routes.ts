import type { RouteRecordRaw } from 'vue-router'
import type { BreadcrumbRoute } from '@arco-design/web-vue'
import type { RouteModule } from '@/router/type'

declare module 'vue-router' {
  interface RouteMeta {
    /*是否需要权限*/
    auth?: boolean
    /* 页面标题 */
    title?: string
    /* 是否在tabbar上面展示 */
    tabbar?: boolean
    /* 面包屑列表 */
    breadcrumbList?: Partial<BreadcrumbRoute>[]
  }
}

let routes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/auth/login/login.view'),
    meta: {
      auth: false,
      title: '欢迎登录',
    },
  },
  {
    path: '/',
    name: 'main',
    component: () => import('@/layout/main/main.layout'),
    redirect: { name: 'Workplace' },
    children: [],
  },
]

// 自动收集子模块的路由
const moduleRoutes = import.meta.glob('../module/**/*.router.ts', {
  eager: true,
  import: 'default',
})

for (const moduleKey of Object.keys(moduleRoutes)) {
  const childRoute = moduleRoutes[moduleKey as string] as RouteModule
  if (!childRoute) continue
  const parent = childRoute.parent
  const p = routes.find(k => k.name && k.name === parent)
  if (p) {
    if (!p.children) p.children = []
    p.children!.push(...childRoute)
  } else {
    routes = routes.concat(childRoute)
  }
}

export { routes }
