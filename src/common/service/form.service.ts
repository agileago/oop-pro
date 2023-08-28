import { Autobind, Computed, Mut, VueService } from 'vue3-oop'
import type { FormInstance, FieldRule } from '@arco-design/web-vue'
import { Message } from '@arco-design/web-vue'
import type { VNodeProps } from 'vue'
import { ref } from 'vue'

type ExtractName<T extends Record<string, any>> = {
  [key in keyof T]: key
}
type FormProps = FormInstance['$props']

@Autobind()
export class FormService<T extends Record<string, any>> extends VueService {
  @Mut() model: T
  private originalModel: T
  @Computed()
  get formProps(): FormProps & VNodeProps {
    return {
      ...this.option,
      model: this.model,
      ref: this.instanceRef,
      ...(this.option.onSubmitSuccess
        ? { onSubmitSuccess: this.onFinish }
        : undefined),
    }
  }
  @Mut() loading = false

  private instanceRef = ref<FormInstance>()
  get instance() {
    return this.instanceRef.value
  }

  @Computed()
  get formItemNames(): ExtractName<T> {
    const obj: any = {}
    Object.keys(this.originalModel).forEach(k => {
      obj[k] = k
    })
    return obj
  }

  private async onFinish(model: any) {
    if (this.loading) return
    try {
      this.loading = true
      // @ts-ignore
      await this.option.onSubmitSuccess?.(model)
    } catch (e: any) {
      console.error(e)
      Message.error(e.message || '服务错误')
    } finally {
      this.loading = false
    }
  }

  constructor(
    private option: FormProps & {
      model: T
      rules?: Partial<Record<keyof T, FieldRule | FieldRule[]>>
    },
  ) {
    super()
    this.originalModel = JSON.parse(JSON.stringify(option.model))
    this.model = option.model
  }
}
