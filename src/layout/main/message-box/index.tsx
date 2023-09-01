import { Autobind, Computed, Hook, Mut, VueComponent } from 'vue3-oop'
import { Button, Result, Spin, TabPane, Tabs } from '@arco-design/web-vue'
import { delay } from '@/common/util'
import { If } from '@/common/component/if'
import type { MessageRecord } from './type'
import { MessageList } from '@/layout/main/message-box/list'
import { css, createStyles } from '@/common/util/cssr'

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
  return [
    {
      id: 1,
      type: 'message',
      title: '郑曦月',
      subTitle: '的私信',
      avatar:
        '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/8361eeb82904210b4f55fab888fe8416.png~tplv-uwbnlip3yd-webp.webp',
      content: '审批请求已发送，请查收',
      time: '今天 12:30:01',
    },
    {
      id: 2,
      type: 'message',
      title: '宁波',
      subTitle: '的回复',
      avatar:
        '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp',
      content: '此处 bug 已经修复',
      time: '今天 12:30:01',
    },
    {
      id: 3,
      type: 'message',
      title: '宁波',
      subTitle: '的回复',
      avatar:
        '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp',
      content: '此处 bug 已经修复',
      time: '今天 12:20:01',
    },
    {
      id: 4,
      type: 'notice',
      title: '续费通知',
      subTitle: '',
      avatar: '',
      content: '您的产品使用期限即将截止，如需继续使用产品请前往购…',
      time: '今天 12:20:01',
      messageType: 3,
    },
    {
      id: 5,
      type: 'notice',
      title: '规则开通成功',
      subTitle: '',
      avatar: '',
      content: '内容屏蔽规则于 2021-12-01 开通成功并生效',
      time: '今天 12:20:01',
      messageType: 1,
    },
    {
      id: 6,
      type: 'todo',
      title: '质检队列变更',
      subTitle: '',
      avatar: '',
      content: '内容质检队列于 2021-12-01 19:50:23 进行变更，请重新…',
      time: '今天 12:20:01',
      messageType: 0,
    },
  ].map(item => ({
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
