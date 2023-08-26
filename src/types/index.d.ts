import type { VNodeChild } from 'vue'

export interface IMenuItem {
  name: string
  path?: string
  icon?: VNodeChild
  /* 是否外链 */
  isLink?: boolean

  hide?: boolean

  children?: IMenuItem[]
}
