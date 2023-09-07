import { RouterLink, useRoute } from 'vue-router'
import {
  Breadcrumb,
  BreadcrumbItem,
  type BreadcrumbRoute,
} from '@arco-design/web-vue'
import { IconApps } from '@arco-design/web-vue/es/icon'
import type { BreadcrumbInstance } from '@arco-design/web-vue/es/breadcrumb'

type BreadProps = BreadcrumbInstance['$props']

export interface AutoBreadcrumbProps extends Omit<BreadProps, 'routes'> {
  routes?: Partial<BreadcrumbRoute>[]
}
export function AutoBreadcrumb(props: AutoBreadcrumbProps) {
  const route = useRoute()
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { routes, class: abc, style, ...rest } = props
  const items = routes || route.meta.breadcrumbList || []

  console.log(rest)

  if (!items.length) return null

  return (
    <Breadcrumb class={'mx-0 my-4'} {...rest}>
      <BreadcrumbItem>
        <RouterLink to={'/'}>
          <IconApps />
        </RouterLink>
      </BreadcrumbItem>
      {items.map(k => {
        return (
          <BreadcrumbItem key={k.label} droplist={k.children}>
            {k.path ? <RouterLink to={k.path}>{k.label}</RouterLink> : k.label}
          </BreadcrumbItem>
        )
      })}
    </Breadcrumb>
  )
}
