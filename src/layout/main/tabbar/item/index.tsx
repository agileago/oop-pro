import {
  Autobind,
  type ClassType,
  type ComponentProps,
  Computed,
  injectService,
  VueComponent,
} from 'vue3-oop'
import { Doption, Dropdown, Tag } from '@arco-design/web-vue'
import { forwardRef } from 'injection-js'
import { Tabbar } from '@/layout/main/tabbar'
import { useRoute, useRouter } from 'vue-router'
import {
  IconFolderDelete,
  IconSwap,
  IconToLeft,
  IconToRight,
} from '@arco-design/web-vue/es/icon'

export interface TabBarItemProps {
  title: string
  fullPath: string
  index: number
}

enum Eaction {
  left = 'left',
  right = 'right',
  others = 'others',
  all = 'all',
}

@Autobind()
export class TabBarItem extends VueComponent<TabBarItemProps> {
  static defaultProps: ComponentProps<TabBarItemProps> = [
    'title',
    'fullPath',
    'index',
  ]

  tabbar = injectService<ClassType<Tabbar>>(forwardRef(() => Tabbar))
  router = useRouter()
  route = useRoute()

  get isCurrent() {
    return this.props.fullPath === this.route.fullPath
  }

  @Computed()
  get disabledReload() {
    return this.props.fullPath !== this.route.fullPath
  }

  @Computed()
  get disabledLeft() {
    return this.props.index == 0 || this.props.index == 1
  }

  @Computed()
  get disabledRight() {
    return this.props.index === this.tabbar.tagList.value.length - 1
  }

  handleClick() {
    if (this.isCurrent) return
    this.router.push(this.props.fullPath)
  }

  handleClose() {
    // 删除当前tab
    this.tabbar.tagList.value.splice(this.props.index, 1)
    if (!this.isCurrent) return
    this.router.push(this.tabbar.tagList.value[this.props.index - 1].fullPath)
  }

  findCurrentIndex() {
    return this.tabbar.tagList.value.findIndex(
      k => k.fullPath === this.route.fullPath,
    )
  }

  actionSelect(value: Eaction) {
    const { index, fullPath } = this.props
    const tagList = [...this.tabbar.tagList.value]
    const currentIndex = this.findCurrentIndex()
    switch (value) {
      case Eaction.left:
        tagList.splice(1, index - 1)
        this.tabbar.tagList.value = tagList
        if (currentIndex !== -1 && currentIndex < index) {
          this.router.push(fullPath)
        }
        break
      case Eaction.right:
        tagList.splice(index + 1)
        this.tabbar.tagList.value = tagList
        if (currentIndex !== -1 && currentIndex > index) {
          this.router.push(fullPath)
        }
        break
      case Eaction.others:
        this.tabbar.tagList.value = tagList.filter((k, i) => i === index)
        this.handleClick()
        break
      case Eaction.all:
        this.tabbar.tagList.value = []
        break
    }
  }

  render() {
    const { props } = this
    return (
      <Dropdown
        trigger={'contextMenu'}
        popupMaxHeight={false}
        onSelect={(v: any) => this.actionSelect(v)}
      >
        {{
          default: () => (
            <Tag
              // @ts-ignore
              onClick={this.handleClick}
              onClose={this.handleClose}
              closable
              color={this.isCurrent ? 'arcoblue' : undefined}
            >
              {props.title}
            </Tag>
          ),
          content: () => {
            return (
              <>
                <Doption disabled={this.disabledLeft} value={Eaction.left}>
                  <IconToLeft />
                  <span class={'ml-[10px]'}>关闭左侧标签页</span>
                </Doption>
                <Doption disabled={this.disabledRight} value={Eaction.right}>
                  <IconToRight />
                  <span class={'ml-[10px]'}>关闭右侧标签页</span>
                </Doption>
                <Doption value={Eaction.others}>
                  <IconSwap />
                  <span class={'ml-[10px]'}>关闭其它标签页</span>
                </Doption>
                <Doption value={Eaction.all}>
                  <IconFolderDelete />
                  <span class={'ml-[10px]'}>关闭全部标签页</span>
                </Doption>
              </>
            )
          },
        }}
      </Dropdown>
    )
  }
}
