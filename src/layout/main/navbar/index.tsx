import { injectService, Link, VueComponent } from 'vue3-oop'
import {
  Avatar,
  Badge,
  Button,
  Doption,
  Dropdown,
  Popover,
  Space,
  Tooltip,
  TypographyTitle,
} from '@arco-design/web-vue'
import {
  IconExport,
  IconFullscreen,
  IconFullscreenExit,
  IconMenuFold,
  IconMoonFill,
  IconNotification,
  IconSearch,
  IconSettings,
  IconSunFill,
  IconUser,
} from '@arco-design/web-vue/es/icon'
import { ThemeService } from '@/layout/main/theme.service'
import { If } from '@/common/component/if'
import { NavMenu } from '@/layout/main/navmenu'
import { useFullscreen } from '@vueuse/core'
import { MessageBox } from '../message-box'
import { UserService } from '@/auth/user.service'
import config from '@/config'
import { createStyles, css } from '@/theme/cssinjs'
import userPng from './user.png'

const styles = createStyles({
  messagePopover: [
    css('.arco-popover-content', {
      marginTop: 0,
    }),
  ],
  rightSlide: [css('.locale-select', { borderRadius: '20px' })],
})

const cssReuse = {
  navBtn: `!border-[rgb(var(--gray-2))] !text-[16px] !text-[rgb(var(--gray-8))]`,
  li: 'flex items-center px-[10px]',
}

export class Navbar extends VueComponent {
  ts = injectService(ThemeService)
  us = injectService(UserService)

  fullScreen = useFullscreen()

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
    const { theme } = ts
    return (
      <div
        class={
          'flex h-full justify-between border-b border-solid border-[--color-border] bg-[--color-bg-2]'
        }
      >
        <div class="flex items-center pl-5">
          <Space>
            <img alt="logo" src={config.site.logo} />
            <TypographyTitle class={'!m-0 !text-[18px]'} heading={5}>
              {config.site.name}
            </TypographyTitle>
            <If condition={!theme.topMenu && ts.isMobile.value}>
              <IconMenuFold
                class={'cursor-pointer text-[22px] md:hidden'}
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
          <li class={cssReuse.li}>
            <Tooltip content={'搜索'}>
              <Button type={'outline'} shape={'circle'} class={cssReuse.navBtn}>
                <IconSearch />
              </Button>
            </Tooltip>
          </li>
          <li class={cssReuse.li}>
            <Tooltip
              content={
                !this.ts.isDark.value
                  ? '点击切换为暗黑模式'
                  : '点击切换为亮色模式'
              }
            >
              <Button
                onClick={() => (this.ts.isDark.value = !this.ts.isDark.value)}
                type={'outline'}
                shape={'circle'}
                class={cssReuse.navBtn}
              >
                <If condition={this.ts.isDark.value}>
                  <IconMoonFill />
                </If>
                <If condition={!this.ts.isDark.value}>
                  <IconSunFill />
                </If>
              </Button>
            </Tooltip>
          </li>
          <li class={cssReuse.li}>
            <Tooltip content={'消息通知'}>
              <div>
                <Badge count={9} dot>
                  <Button
                    onClick={this.setPopoverVisible}
                    type={'outline'}
                    shape={'circle'}
                    class={cssReuse.navBtn}
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
          <li class={cssReuse.li}>
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
                class={cssReuse.navBtn}
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
          <li class={cssReuse.li}>
            <Tooltip content={'设置'}>
              <Button
                type={'outline'}
                shape={'circle'}
                class={cssReuse.navBtn}
                onClick={() => (theme.globalSettings = true)}
              >
                <IconSettings />
              </Button>
            </Tooltip>
          </li>
          <li class={cssReuse.li}>
            <Dropdown trigger={'click'}>
              {{
                default: () => (
                  <Avatar size={32} class={'mr-2 cursor-pointer'}>
                    <img alt="avatar" src={userPng} />
                  </Avatar>
                ),
                content: () => (
                  <>
                    <Doption>
                      <Space>
                        <IconUser></IconUser>
                        <span>用户中心</span>
                      </Space>
                    </Doption>
                    <Doption>
                      <Space>
                        <IconSettings></IconSettings>
                        <span>用户设置</span>
                      </Space>
                    </Doption>
                    <Doption onClick={this.us.logout}>
                      <Space>
                        <IconExport></IconExport>
                        <span>登出登录</span>
                      </Space>
                    </Doption>
                  </>
                ),
              }}
            </Dropdown>
          </li>
        </ul>
      </div>
    )
  }
}
