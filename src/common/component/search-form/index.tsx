import {
  Autobind,
  type ComponentProps,
  Computed,
  Mut,
  VueComponent,
  Link,
} from 'vue3-oop'
import { Fragment, type VNode, withModifiers } from 'vue'
import { ElementMediaQueryService } from './element-media-query.service'

import {
  Link as ALink,
  Button,
  Col,
  Form,
  Row,
  Space,
} from '@arco-design/web-vue'
import type { FormInstance } from '@arco-design/web-vue'
import { IconDown, IconUp } from '@arco-design/web-vue/es/icon'

type FormProps = FormInstance['$props']

export interface SearchFormAddiProps {
  /**
   * 隐藏重置按钮
   * @default false
   */
  hideReset?: boolean
  /**
   * 表单列数，如果不设置会根据屏幕自动计算
   */
  colCount?: number
  /**
   * 重置后回调
   */
  onReset?: () => void
}
export interface SearchFormProps
  extends SearchFormAddiProps,
    Partial<FormProps> {}

/**
 * 搜索表单，封装了表单的布局
 */
@Autobind()
export class SearchForm extends VueComponent<SearchFormProps> {
  static defaultProps: ComponentProps<SearchFormAddiProps> = [
    'hideReset',
    'colCount',
    'onReset',
  ]
  static inheritAttrs = false

  @Mut() seeMore = false
  @Link() form!: FormInstance

  elementQuery = new ElementMediaQueryService()

  @Computed()
  get colCount() {
    if (this.props.colCount !== undefined) {
      return this.props.colCount
    }
    if (this.elementQuery.isLg) {
      return 4
    }
    if (this.elementQuery.isMd) {
      return 3
    }
    if (this.elementQuery.isSm) {
      return 2
    }
    if (this.elementQuery.isXs) {
      return 1
    }
    return 3
  }

  reset() {
    this.form.resetFields()
    this.form.$emit('submitSuccess', this.form.model, null as any)
    this.props.onReset?.()
  }

  render() {
    let children = this.context.slots.default?.() as VNode[]
    if (!children) return null
    if (
      children.length === 1 &&
      typeof children[0] === 'object' &&
      children[0].type === Fragment
    ) {
      children = children[0].children as VNode[]
    }
    children = children.filter(k => !!k)
    const colCount = this.colCount
    const colSpan = 24 / colCount
    const hiddenIndex = this.seeMore
      ? children.length
      : Math.min(colCount - 1 || 1, children.length)
    let offsetLayout = this.seeMore
      ? (colCount - 1) * colSpan - colSpan * (children.length % colCount)
      : (colCount - 1) * colSpan - colSpan * hiddenIndex
    const less3 = children.length < colCount
    if (less3) offsetLayout = 0

    const grid = children.map((k, i) => {
      return (
        <Col span={colSpan} class={i >= hiddenIndex ? '!hidden' : undefined}>
          {k}
        </Col>
      )
    })
    const search = (
      <Col span={colSpan} offset={offsetLayout} class={!less3 && 'text-right'}>
        <Space>
          {!this.props.hideReset && <Button onClick={this.reset}>重置</Button>}
          <Button type={'primary'} htmlType={'submit'}>
            查询
          </Button>
          {!less3 && (
            <ALink
              class={'text-[12px]'}
              onClick={withModifiers(
                () => (this.seeMore = !this.seeMore),
                ['prevent'],
              )}
            >
              {this.seeMore ? ['收起', <IconUp />] : ['更多', <IconDown />]}
            </ALink>
          )}
        </Space>
      </Col>
    )
    grid.push(search)

    return (
      // @ts-ignore
      <Form
        layout={'horizontal'}
        labelColProps={{ span: 6 }}
        wrapperColProps={{ span: 18 }}
        labelAlign={'left'}
        autoLabelWidth
        ref={'form'}
        {...this.context.attrs}
      >
        <div ref={this.elementQuery.elementRef}>
          <Row gutter={16}>{grid}</Row>
        </div>
      </Form>
    )
  }
}
