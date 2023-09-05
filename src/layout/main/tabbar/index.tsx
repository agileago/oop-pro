import {
  Autobind,
  Component,
  Computed,
  injectService,
  Link,
  VueComponent,
} from 'vue3-oop'
import { Affix, Link as LinkC } from '@arco-design/web-vue'
import { ThemeService } from '@/layout/main/theme.service'
import { useRoute } from 'vue-router'
import { watch } from 'vue'
import { useStorage } from '@vueuse/core'
import config from '@/config'
import { TabBarItem } from './item'
import { IconRefresh } from '@arco-design/web-vue/es/icon'
import { createStyles, css } from '@/theme/cssinjs'

const styles = createStyles({
  tagsWrap: [
    css(
      '.arco-tag',
      {
        display: 'inline-flex',
        alignItems: 'center',
        marginRight: '6px',
        cursor: 'pointer',
      },
      [css('&:first-child', [css('.arco-tag-close-btn', { display: 'none' })])],
    ),
  ],
})

export interface TagProps {
  title: string
  fullPath: string
}

@Autobind()
@Component()
export class Tabbar extends VueComponent {
  constructor() {
    super()
    watch(() => this.route.path, this.handleRouteChange, {
      immediate: true,
    })
    // 修正affix 的位置
    watch(
      () => this.ts.theme.navbar,
      () => this.affixRef?.updatePosition?.(),
    )
  }

  ts = injectService(ThemeService)
  route = useRoute()

  @Link() affixRef: any

  @Computed()
  get offsetTop() {
    return this.ts.theme.navbar ? this.ts.theme.navBarHeight : 0
  }

  // 缓存当前的历史
  tagList = useStorage<TagProps[]>(
    config.storageKey.tagList,
    [],
    sessionStorage,
  )

  handleRouteChange() {
    if (!this.route.meta.tabbar) return
    const { fullPath } = this.route
    if (this.tagList.value.find(k => k.fullPath === fullPath)) return
    this.tagList.value.push({
      title: this.route.meta.title || '页面',
      fullPath,
    })
  }

  render() {
    return (
      <div class={'relative bg-[--color-bg-2]'}>
        <Affix ref={'affixRef'} offsetTop={this.offsetTop}>
          <div
            class={
              'flex border-b border-solid border-[--color-border] bg-[--color-bg-2] px-5'
            }
          >
            <div class={'h-8 flex-1 overflow-hidden'}>
              <div
                class={`h-12 overflow-x-auto whitespace-nowrap py-1 ${styles.tagsWrap}`}
              >
                {this.tagList.value.map((k, i) => (
                  <TabBarItem
                    index={i}
                    key={k.fullPath}
                    title={k.title}
                    fullPath={k.fullPath}
                  ></TabBarItem>
                ))}
              </div>
            </div>
            <div class={'flex h-8 w-[100px] items-center justify-end'}>
              <LinkC
                class={'!text-[20px]'}
                /* @ts-ignore */
                title={'重新加载'}
                onClick={() => this.ts.refreshPageKey()}
              >
                <IconRefresh />
              </LinkC>
            </div>
          </div>
        </Affix>
      </div>
    )
  }
}
