import { injectService, VueComponent } from 'vue3-oop'
import { ThemeService } from '@/layout/main/theme.service'
import { If } from '@/common/component/if'
import { Teleport } from 'vue'
import {
  Alert,
  Button,
  Drawer,
  InputNumber,
  Message,
  Switch,
} from '@arco-design/web-vue'
import { IconSettings } from '@arco-design/web-vue/es/icon'
import { useClipboard } from '@vueuse/core'

export class Setting extends VueComponent {
  ts = injectService(ThemeService)
  theme = this.ts.theme

  clipboard = useClipboard()

  copySetting = async () => {
    const text = JSON.stringify(this.theme, null, 2)
    await this.clipboard.copy(text)
    Message.success('复制成功')
  }

  render() {
    const { theme } = this
    return (
      <>
        <If condition={!theme.navbar}>
          <Teleport to={'body'}>
            <div
              class={'fixed right-0 top-[280px]'}
              onClick={() => (theme.globalSettings = true)}
            >
              <Button type={'primary'}>
                <IconSettings size={18} class={'align-[-4px]'} />
              </Button>
            </div>
          </Teleport>
        </If>
        <Drawer
          width={300}
          unmountOnClose
          visible={theme.globalSettings}
          cancelText={'关闭'}
          okText={'复制配置'}
          onOk={() => this.copySetting()}
          onCancel={() => (theme.globalSettings = false)}
          title={'页面配置'}
        >
          <div class={'mb-6'}>
            <h5 class={'mx-0 my-[10px] p-0 text-[14px]'}>内容区域</h5>
            <div class={'flex h-8 items-center justify-between'}>
              <span>导航栏</span>
              <Switch v-model={theme.navbar} size={'small'}></Switch>
            </div>
            <div class={'flex h-8 items-center justify-between'}>
              <span>菜单栏</span>
              <Switch v-model={theme.menu} size={'small'}></Switch>
            </div>
            <div class={'flex h-8 items-center justify-between'}>
              <span>顶部菜单栏</span>
              <Switch v-model={theme.topMenu} size={'small'}></Switch>
            </div>
            <div class={'flex h-8 items-center justify-between'}>
              <span>底部</span>
              <Switch v-model={theme.footer} size={'small'}></Switch>
            </div>
            <div class={'flex h-8 items-center justify-between'}>
              <span>多页签</span>
              <Switch v-model={theme.tabBar} size={'small'}></Switch>
            </div>
            <div class={'flex h-8 items-center justify-between'}>
              <span>菜单宽度</span>
              <InputNumber
                v-model={theme.menuWidth}
                size={'small'}
                style={'width: 80px'}
              ></InputNumber>
            </div>
          </div>
          <div class={'mb-6'}>
            <h5 class={'mx-0 my-[10px] p-0 text-[14px]'}>其他设置</h5>
            <div class={'flex h-8 items-center justify-between'}>
              <span>色弱模式</span>
              <Switch v-model={theme.colorWeak} size={'small'}></Switch>
            </div>
          </div>
          <Alert>
            配置之后仅是临时生效，要想真正作用于项目，点击下方的 "复制配置"
            按钮，将配置替换到 theme.service.ts 中即可。
          </Alert>
        </Drawer>
      </>
    )
  }
}
