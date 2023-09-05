import { Autobind, Computed, Hook, Mut, VueComponent } from 'vue3-oop'
import { Button, Result, Spin, TabPane, Tabs } from '@arco-design/web-vue'
import { delay } from '@/common/util'
import { If } from '@/common/component/if'
import type { MessageRecord } from './type'
import { MessageList } from '@/layout/main/message-box/list'
import { css, createStyles } from '@/theme/cssinjs'
import { mockData } from './mock'

const styles = createStyles({
  messageBox: [
    css('.arco-popover-popup-content', { padding: 0 }),
    css('.arco-list-item-meta', { alignItems: 'flex-start' }),
    css('.arco-tabs-nav', {
      padding: '14px 0 12px 16px',
      borderBottom: '1px solid var(--color-neutral-3)',
    }),
    css('.arco-tabs-content', { paddingTop: 0 }, [
      css('.arco-result-subtitle', {
        color: 'rgb(var(--gray-6))',
      }),
    ]),
  ],
})

interface TabItem {
  key: string
  title: string
  avatar?: string
}

const getMessageList = (): MessageRecord[] => {
  return mockData.map(item => ({
    ...item,
    status: 0,
  }))
}

@Autobind()
export class MessageBox extends VueComponent {
  @Mut() loading = true

  tabList: TabItem[] = [
    {
      key: 'message',
      title: '消息',
    },
    {
      key: 'notice',
      title: '通知',
    },
    {
      key: 'todo',
      title: '待办',
    },
  ]
  @Mut() messageType = 'message'

  @Mut() messageList: MessageRecord[] = []

  @Computed()
  get renderList() {
    return this.messageList.filter(k => k.type === this.messageType)
  }

  @Hook('Mounted')
  async fetchSourceData() {
    this.loading = true
    try {
      await delay(3000)
      this.messageList = getMessageList()
    } catch (err) {
      // you can report use errorHandler or other
    } finally {
      this.loading = false
    }
  }

  render() {
    return (
      <Spin style="display:block" loading={this.loading}>
        <Tabs
          class={styles.messageBox}
          v-model:activeKey={this.messageType}
          type={'rounded'}
          destroyOnHide
          v-slots={{ extra: () => <Button type={'text'}>清空</Button> }}
        >
          {this.tabList.map(k => {
            return (
              <TabPane key={k.key} title={k.title}>
                <If condition={!this.renderList.length}>
                  <Result subtitle={'暂无内容'}></Result>
                </If>
                <If condition={this.renderList.length}>
                  <MessageList renderList={this.renderList}></MessageList>
                </If>
              </TabPane>
            )
          })}
        </Tabs>
      </Spin>
    )
  }
}
