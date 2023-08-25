import './theme/app.scss'
import { Component, VueComponent } from 'vue3-oop'
import { RouterView } from 'vue-router'
import { UserService } from '@/auth/user.service'
import { ConfigProvider } from '@arco-design/web-vue'
import zhCN from '@arco-design/web-vue/es/locale/lang/zh-cn'

@Component({ providers: [UserService] })
export class App extends VueComponent {
  render() {
    return (
      <ConfigProvider locale={zhCN}>
        <RouterView />
      </ConfigProvider>
    )
  }
}
