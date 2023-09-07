import { VueComponent } from 'vue3-oop'
import {
  Button,
  Card,
  FormItem,
  Input,
  RangePicker,
  Select,
  Upload,
} from '@arco-design/web-vue'
import { AutoBreadcrumb } from '@/common/component/auto-breadcrumb'
import { SearchForm } from '@/common/component/search-form'
import { FormService } from '@/common/service/form.service'
import type { SelectOptionData } from '@arco-design/web-vue/es/select/interface'
import { Toolbar } from '@/common/component/toolbar'
import { IconDownload, IconPlus } from '@arco-design/web-vue/es/icon'

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

const filterTypeList: SelectOptionData[] = [
  {
    label: '人工筛选',
    value: 'artificial',
  },
  {
    label: '规则筛选',
    value: 'rules',
  },
]

const statusList: SelectOptionData[] = [
  {
    label: '已上线',
    value: 'online',
  },
  {
    label: '已下线',
    value: 'offline',
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
    onSubmitSuccess: model => {
      console.log(model)
    },
    cacheModel: true,
  })

  render() {
    const { fs } = this
    return (
      <div class={'p-5 pt-0'}>
        <AutoBreadcrumb routes={[{ label: '列表页' }, { label: '查询表格' }]} />
        <Card title={'查询表格'} class={'general-card'}>
          <SearchForm {...fs.formProps} defaultSeeMore maxCount={3}>
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
            <FormItem field={fs.formItemNames.filterType} label={'筛选方式'}>
              <Select
                allowClear
                options={filterTypeList}
                v-model={fs.model.filterType}
                placeholder={'全部'}
              ></Select>
            </FormItem>
            <FormItem field={fs.formItemNames.createdTime} label={'创建时间'}>
              <RangePicker
                v-model={fs.model.createdTime}
                class={'w-full'}
              ></RangePicker>
            </FormItem>
            <FormItem field={fs.formItemNames.status} label={'状态'}>
              <Select
                allowClear
                v-model={fs.model.status}
                placeholder={'全部'}
                options={statusList}
              ></Select>
            </FormItem>
          </SearchForm>
          <Toolbar class={'pt-0'}>
            <Toolbar.Left>
              <Button type={'primary'} v-slots={{ icon: () => <IconPlus /> }}>
                新建
              </Button>
              <Upload
                action={'/'}
                v-slots={{
                  'upload-button': () => <Button>导入</Button>,
                }}
              ></Upload>
            </Toolbar.Left>
            <Toolbar.Right>
              <Button v-slots={{ icon: () => <IconDownload /> }}>下载</Button>
            </Toolbar.Right>
          </Toolbar>
        </Card>
      </div>
    )
  }
}
