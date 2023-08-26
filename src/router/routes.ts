import type { RouteRecordRaw } from 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    /*是否需要权限*/
    auth?: boolean
  }
}

let routes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/auth/login.view'),
    meta: {
      auth: false,
    },
  },
  {
    path: '/',
    name: 'main',
    component: () => import('@/layout/main/main.layout'),
    redirect: '/home',
    children: [],
  },
]

// 自动收集子模块的路由
const moduleRoutes = import.meta.glob('../module/**/*.router.ts', {
  eager: true,
  import: 'default',
})

for (const moduleKey of Object.keys(moduleRoutes)) {
  const childRoute = moduleRoutes[moduleKey as string] as RouteRecordRaw[]
  if (!childRoute) continue
  // @ts-ignore
  const parent: string = childRoute.parent
  const p = routes.find(k => k.name === parent)
  if (p) {
    if (!p.children) p.children = []
    p.children!.push(...childRoute)
  } else {
    routes = routes.concat(childRoute)
  }
}

export { routes }
