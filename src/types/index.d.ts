import type { VNodeChild } from 'vue'

export interface IMenuItem {
  /* 菜单名称 */
  name: string
  /* 菜单路由， 没有可不填 */
  path?: string
  /* 菜单图标 */
  icon?: VNodeChild
  /* 是否外链 */
  isLink?: boolean
  /* 子菜单 */
  children?: IMenuItem[]
}
