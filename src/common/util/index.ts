import type { AllowedComponentProps, FunctionalComponent } from 'vue'

export function delay(timeout = 300) {
  return new Promise(r => setTimeout(r, timeout))
}

/**
 * 创建默认的函数式组件
 */
export function createSlotDefaultComponent() {
  const SlotDefaultComponent: FunctionalComponent<AllowedComponentProps> = (
    props,
    ctx,
  ) => ctx.slots.default?.()

  SlotDefaultComponent.inheritAttrs = false

  return SlotDefaultComponent
}
