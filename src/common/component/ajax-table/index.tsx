import {
  Autobind,
  type ComponentProps,
  Hook,
  Mut,
  VueComponent,
} from 'vue3-oop'
import {
  type TableInstance,
  Table,
  type PaginationProps,
} from '@arco-design/web-vue'

type TableProps = TableInstance['$props']

export interface AjaxTableProps {
  /* 请求 */
  request: (
    params: Record<string, any>,
    sort?: Record<string, any>,
    filter?: Record<string, any>,
  ) => any

  totalKey?: string

  listKey?: string
}

@Autobind()
export class AjaxTable extends VueComponent<AjaxTableProps & TableProps> {
  static defaultProps: ComponentProps<AjaxTableProps> = [
    'request',
    'listKey',
    'totalKey',
  ]

  @Mut() data = []
  @Mut() loading = false
  @Mut() pagination: PaginationProps = {
    current: 1,
    pageSize: 20,
    showPageSize: true,
    showTotal: true,
    hideOnSinglePage: true,
    pageSizeOptions: [20, 40, 50, 100],
  }

  private _currentPromis: any

  @Hook('Mounted')
  async refresh(resetPage = false) {
    this.loading = true
    const params = resetPage
      ? { current: 1, pageSize: this.pagination.pageSize }
      : { current: this.pagination.current, pageSize: this.pagination.pageSize }
    const currentPromis = this.props.request(params)
    this._currentPromis = currentPromis
    try {
      const data = await currentPromis
      if (this._currentPromis !== currentPromis) return
      this.data = data[this.props.listKey || 'list']
      this.pagination.current = params.current
      this.pagination.pageSize = params.pageSize
      this.pagination.total = data[this.props.totalKey || 'total']
    } catch (e) {
      if (this._currentPromis !== currentPromis) return
      console.error(e)
    } finally {
      if (this._currentPromis === currentPromis) {
        this.loading = false
      }
    }
  }

  handlePageChange(current: number) {
    this.pagination.current = current
    this.refresh()
  }

  handlePageSizeChange(size: number) {
    this.pagination.pageSize = size
    this.refresh()
  }

  render() {
    return (
      <Table
        onPageChange={this.handlePageChange}
        onPageSizeChange={this.handlePageSizeChange}
        pagination={this.pagination}
        loading={this.loading}
        data={this.data}
        {...this.context.attrs}
        v-slots={this.context.slots}
      ></Table>
    )
  }
}
