import { VueComponent } from 'vue3-oop'
import { Layout } from '@arco-design/web-vue'
import { Navbar } from './navbar'

export default class MainLayout extends VueComponent {
  render() {
    return (
      <Layout class={'h-full w-full'}>
        <div class={'z-100 fixed left-0 top-0 h-[60px] w-full'}>
          <Navbar></Navbar>
        </div>
      </Layout>
    )
  }
}
