import { Mut, VueComponent } from 'vue3-oop'
import {
  Breadcrumb,
  BreadcrumbItem,
  Card,
  Col,
  Divider,
  Form,
  FormItem,
  Input,
  Row,
} from '@arco-design/web-vue'
import { IconApps } from '@arco-design/web-vue/es/icon'

export default class SearchTableView extends VueComponent {
  @Mut() model = {
    number: '',
    name: '',
    contentType: '',
    filterType: '',
    createdTime: [],
    status: '',
  }

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
        <Card title={'查询表格'} class={'general-card'}>
          <Row>
            <Col flex={1}>
              <Form
                model={this.model}
                labelColProps={{ span: 6 }}
                wrapperColProps={{ span: 18 }}
                labelAlign={'left'}
              >
                <Row gutter={16}>
                  <Col span={8}>
                    <FormItem field={'number'} label={'集合编号'}>
                      <Input v-model={this.model.number}></Input>
                    </FormItem>
                  </Col>
                </Row>
              </Form>
            </Col>
            <Divider direction={'vertical'} class={'h-[84px]'}></Divider>
            <Col flex={'86px'} class={'text-right'}></Col>
          </Row>
        </Card>
      </div>
    )
  }
}
