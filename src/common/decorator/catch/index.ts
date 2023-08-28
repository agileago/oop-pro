import { Message } from '@arco-design/web-vue'

export type AnyFunc = (...args: any[]) => any

function setPathVal(obj: any, key: string | string[], val: any) {
  if (typeof key === 'string') {
    obj[key] = val
  } else {
    const last = key[key.length - 1]
    key.reduce((value, item) => {
      if (item === last) value[item] = val
      else return value[item]
    }, obj)
  }
}

export function CatchWrapper(fn: AnyFunc, loadingKey?: string | string[]) {
  return async function (this: any, ...args: any[]) {
    if (loadingKey) setPathVal(this, loadingKey, true)
    try {
      return await fn.apply(this, args)
    } catch (e: any) {
      console.error(e)
      Message.error(e.message || '服务错误')
    } finally {
      if (loadingKey) setPathVal(this, loadingKey, false)
    }
  }
}

/**
 * 自动处理异常装饰器，适合异常后无后续处理的请求
 * @param loadingKey  自定义loading
 */
export function Catch(loadingKey?: string | string[]): MethodDecorator {
  return function (
    target: any,
    key: string | symbol,
    desc: PropertyDescriptor,
  ) {
    const fn = desc.value
    desc.value = CatchWrapper(fn, loadingKey)
    return desc
  }
}
