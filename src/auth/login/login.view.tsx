import { LayoutFooter } from '@arco-design/web-vue'
import { VueComponent } from 'vue3-oop'
import { Banner } from './banner'
import { LoginForm } from './form'
import config from '@/config'

export default class LoginView extends VueComponent {
  render() {
    return (
      <div class="flex h-screen">
        <div class="fixed left-[22px] top-6 z-[1] inline-flex items-center">
          <img alt="logo" src={config.site.logo} />
          <div class="mx-1 text-[20px] text-[--color-text-1] sm:text-[--color-fill-1]">
            {config.site.name}
          </div>
        </div>
        <Banner />
        <div class="relative flex flex-1 items-center justify-center pb-10">
          <div class="content-inner">
            <LoginForm></LoginForm>
          </div>
          <div class="absolute bottom-0 right-0 w-full">
            <LayoutFooter
              class={
                'absolute bottom-0 right-0 flex h-10 w-full items-center justify-center text-center text-[--color-text-2]'
              }
            >
              {config.site.foot}
            </LayoutFooter>
          </div>
        </div>
      </div>
    )
  }
}
