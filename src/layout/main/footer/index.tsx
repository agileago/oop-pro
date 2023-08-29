import { LayoutFooter } from '@arco-design/web-vue'
import config from '@/config'

export function Footer() {
  return (
    <LayoutFooter
      class={
        'flex h-10 items-center justify-center text-center text-[--color-text-2]'
      }
    >
      {config.site.foot}
    </LayoutFooter>
  )
}
