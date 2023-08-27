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

export interface MessageRecord {
  id: number
  type: string
  title: string
  subTitle: string
  avatar?: string
  content: string
  time: string
  status: 0 | 1
}
