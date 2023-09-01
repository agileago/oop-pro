import { VueComponent } from 'vue3-oop'
import { Breadcrumb, BreadcrumbItem, Card } from '@arco-design/web-vue'
import { IconApps } from '@arco-design/web-vue/es/icon'

export default class SearchTableView extends VueComponent {
  render() {
    return (
      <div class={'p-5 pt-0'}>
        <Breadcrumb class={'mx-0 my-4'}>
          <BreadcrumbItem>
            <IconApps />
          </BreadcrumbItem>
          <BreadcrumbItem>列表页</BreadcrumbItem>
          <BreadcrumbItem>查询表格</BreadcrumbItem>
        </Breadcrumb>
        <Card title={'查询表格'} class={'general-card'}></Card>
      </div>
    )
  }
}
