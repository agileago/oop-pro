import type { MessageRecord } from '@/types'
import {
  Avatar,
  Link,
  List,
  ListItem,
  ListItemMeta,
  Space,
  Tag,
  TypographyParagraph,
  TypographyText,
} from '@arco-design/web-vue'
import { If } from '@/common/component/if'
import { IconDesktop } from '@arco-design/web-vue/es/icon'

interface MessageListProps {
  renderList: MessageRecord[]
}

export function MessageList(props: MessageListProps) {
  const footer = () => {
    return (
      <Space fill size={0}>
        <div class={'text-center'}>
          <Link>全部已读</Link>
        </div>
        <div class={'text-center'}>
          <Link>查看更多</Link>
        </div>
      </Space>
    )
  }

  return (
    <List bordered={false} v-slots={{ footer }}>
      {props.renderList.map(k => {
        return (
          <ListItem
            key={k.id}
            actionLayout={'vertical'}
            class={k.status ? 'opacity-50' : ''}
          >
            {{
              extra: () => <Tag color={'blue'}>进行中</Tag>,
              default: () => (
                <div class={'cursor-pointer'}>
                  <ListItemMeta>
                    {{
                      avatar: () => (
                        <Avatar shape={'circle'}>
                          <IconDesktop></IconDesktop>
                        </Avatar>
                      ),
                      title: () => {
                        return (
                          <Space size={4}>
                            <span>{k.title}</span>
                            {/* @ts-ignore*/}
                            <TypographyText type={'secondary'}>
                              {k.subTitle}
                            </TypographyText>
                          </Space>
                        )
                      },
                      description: () => (
                        <div>
                          {/* @ts-ignore*/}
                          <TypographyParagraph ellipsis={{ rows: 1 }}>
                            {k.content}
                          </TypographyParagraph>
                          <If condition={k.type === 'message'}>
                            <TypographyText
                              class={'text-[12px] text-[rgb(var(--gray-6))]'}
                            >
                              {k.time}
                            </TypographyText>
                          </If>
                        </div>
                      ),
                    }}
                  </ListItemMeta>
                </div>
              ),
            }}
          </ListItem>
        )
      })}
    </List>
  )
}
