import type { RouteRecordRaw } from 'vue-router'
import type { VNodeChild } from 'vue'

// 路由模块
export interface RouteModule extends Array<RouteRecordRaw> {
  /* 父路由名称 */
  parent?: string
}

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
