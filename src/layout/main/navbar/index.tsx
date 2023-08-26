import { injectService, VueComponent, Link } from 'vue3-oop'
import logo from '@/assets/logo.svg'
import {
  Badge,
  Button,
  Popover,
  Space,
  Tooltip,
  TypographyTitle,
} from '@arco-design/web-vue'
import {
  IconFullscreen,
  IconFullscreenExit,
  IconMenuFold,
  IconMoonFill,
  IconNotification,
  IconSearch,
  IconSunFill,
} from '@arco-design/web-vue/es/icon'
import { ThemeService } from '@/theme/theme.service'
import { If } from '@/common/component/if'
import { NavMenu } from '@/layout/main/navmenu'
import { useFullscreen, useToggle } from '@vueuse/core'
import styles from './navbar.module.scss'
import { MessageBox } from '../message-box'

const css = {
  navBtn: `!border-[rgb(var(--gray-2))] !text-[16px] !text-[rgb(var(--gray-8))]`,
  li: 'flex items-center px-[10px]',
}

export class Navbar extends VueComponent {
  ts = injectService(ThemeService)

  fullScreen = useFullscreen()

  toggleTheme = useToggle(this.ts.isDark)

  @Link() refBtn!: HTMLDivElement

  setPopoverVisible = () => {
    const event = new MouseEvent('click', {
      view: window,
      bubbles: true,
      cancelable: true,
    })
    this.refBtn.dispatchEvent(event)
  }

  render() {
    const { ts, fullScreen } = this
    return (
      <div
        class={
          'flex h-full justify-between border-b border-solid border-[--color-border] bg-[--color-bg-2]'
        }
      >
        <div class="flex items-center pl-5">
          <Space>
            <img alt="logo" src={logo} />
            <TypographyTitle class={'!m-0 !text-[18px]'} heading={5}>
              Arco Pro
            </TypographyTitle>
            <If condition={ts.theme.device === 'mobile'}>
              <IconMenuFold
                class={'cursor-pointer text-[22px]'}
                onClick={ts.toggleDrawerMenu}
              ></IconMenuFold>
            </If>
          </Space>
        </div>
        <div class={'flex-1'}>
          <If condition={ts.theme.topMenu}>
            <NavMenu></NavMenu>
          </If>
        </div>
        <ul class={`flex list-none pr-5 ${styles.rightSlide}`}>
          <li class={css.li}>
            <Tooltip content={'搜索'}>
              <Button type={'outline'} shape={'circle'} class={css.navBtn}>
                <IconSearch />
              </Button>
            </Tooltip>
          </li>
          <li class={css.li}>
            <Tooltip
              content={
                ts.theme.theme === 'light'
                  ? '点击切换为暗黑模式'
                  : '点击切换为亮色模式'
              }
            >
              <Button
                onClick={() => this.toggleTheme()}
                type={'outline'}
                shape={'circle'}
                class={css.navBtn}
              >
                <If condition={ts.theme.theme === 'dark'}>
                  <IconMoonFill />
                </If>
                <If condition={ts.theme.theme === 'light'}>
                  <IconSunFill />
                </If>
              </Button>
            </Tooltip>
          </li>
          <li class={css.li}>
            <Tooltip content={'消息通知'}>
              <div>
                <Badge count={9} dot>
                  <Button
                    onClick={this.setPopoverVisible}
                    type={'outline'}
                    shape={'circle'}
                    class={css.navBtn}
                  >
                    <IconNotification />
                  </Button>
                </Badge>
              </div>
            </Tooltip>
            <Popover
              position={'bottom'}
              trigger={'click'}
              arrowStyle={{ display: 'none' }}
              contentStyle={{ padding: 0, minWidth: '400px' }}
              contentClass={styles.messagePopover}
              v-slots={{ content: () => <MessageBox /> }}
            >
              <div class={'absolute bottom-[14px]'} ref={'refBtn'}></div>
            </Popover>
          </li>
          <li class={css.li}>
            <Tooltip
              content={
                fullScreen.isFullscreen.value
                  ? '点击退出全屏模式'
                  : '点击切换全屏模式'
              }
            >
              <Button
                onClick={fullScreen.toggle}
                type={'outline'}
                shape={'circle'}
                class={css.navBtn}
              >
                <If condition={fullScreen.isFullscreen.value}>
                  <IconFullscreenExit />
                </If>
                <If condition={!fullScreen.isFullscreen.value}>
                  <IconFullscreen />
                </If>
              </Button>
            </Tooltip>
          </li>
        </ul>
      </div>
    )
  }
}
