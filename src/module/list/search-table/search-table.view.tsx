import { VueComponent } from 'vue3-oop'
import { Card, FormItem, Input, Select } from '@arco-design/web-vue'
import { AutoBreadcrumb } from '@/common/component/auto-breadcrumb'
import { SearchForm } from '@/common/component/search-form'
import { FormService } from '@/common/service/form.service'

const contentTypeList = [
  {
    label: '图文',
    value: 'img',
  },
  {
    label: '横版短视频',
    value: 'horizontalVideo',
  },
  {
    label: '竖版小视频',
    value: 'verticalVideo',
  },
]

export default class SearchTableView extends VueComponent {
  fs = new FormService({
    model: {
      number: '',
      name: '',
      contentType: '',
      filterType: '',
      createdTime: [],
      status: '',
    },
    onSubmitSuccess: async model => {
      console.log(model)
    },
  })

  render() {
    const { fs } = this
    return (
      <div class={'p-5 pt-0'}>
        <AutoBreadcrumb routes={[{ label: '列表页' }, { label: '查询表格' }]} />
        <Card title={'查询表格'} class={'general-card'}>
          <SearchForm {...fs.formProps}>
            <FormItem field={fs.formItemNames.number} label={'集合编号'}>
              <Input
                v-model={fs.model.number}
                placeholder={'请输入集合编号'}
              ></Input>
            </FormItem>
            <FormItem field={fs.formItemNames.name} label={'集合名称'}>
              <Input
                v-model={fs.model.name}
                placeholder={'请输入集合名称'}
              ></Input>
            </FormItem>
            <FormItem field={fs.formItemNames.contentType} label={'内容体裁'}>
              <Select
                allowClear
                options={contentTypeList}
                v-model={fs.model.contentType}
                placeholder={'请选择内容体裁'}
              ></Select>
            </FormItem>
            <FormItem field={fs.formItemNames.number} label={'集合编号'}>
              <Input
                v-model={fs.model.number}
                placeholder={'请输入集合编号'}
              ></Input>
            </FormItem>
            <FormItem field={fs.formItemNames.number} label={'集合编号'}>
              <Input
                v-model={fs.model.number}
                placeholder={'请输入集合编号'}
              ></Input>
            </FormItem>
            <FormItem field={fs.formItemNames.number} label={'集合编号'}>
              <Input
                v-model={fs.model.number}
                placeholder={'请输入集合编号'}
              ></Input>
            </FormItem>
          </SearchForm>
        </Card>
      </div>
    )
  }
}
