import { createSlotDefaultComponent } from '@/common/util'
import type { AllowedComponentProps, FunctionalComponent, VNode } from 'vue'

const Left = createSlotDefaultComponent()
const Right = createSlotDefaultComponent()

export const Toolbar: FunctionalComponent<AllowedComponentProps> & {
  Left: typeof Left
  Right: typeof Right
} = (props, ctx) => {
  const children = ctx.slots.default?.() as VNode[]
  console.log(children)
  const leftChild = children.find(k => k.type === Left)
  const rightChild = children.find(k => k.type === Right)

  return (
    <div class={'flex justify-between py-4'}>
      <div class={'flex items-center gap-2'} {...leftChild?.props}>
        {leftChild}
      </div>
      <div class={'flex items-center gap-2'} {...rightChild?.props}>
        {rightChild}
      </div>
    </div>
  )
}

Toolbar.Left = Left
Toolbar.Right = Right
