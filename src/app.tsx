import './theme/app.scss'
import '@morev/vue-transitions/styles'
import { Component, VueComponent } from 'vue3-oop'
import { RouterView } from 'vue-router'
import { UserService } from '@/auth/user.service'
import { ConfigProvider } from '@arco-design/web-vue'

@Component({ providers: [UserService] })
export class App extends VueComponent {
  render() {
    return (
      <ConfigProvider>
        <RouterView />
      </ConfigProvider>
    )
  }
}
