import { Autobind, Mut, VueComponent } from 'vue3-oop'
import { Spin, Tabs } from '@arco-design/web-vue'

@Autobind()
export class MessageBox extends VueComponent {
  @Mut() loading = true

  render() {
    return (
      <Spin style="display:block" loading={this.loading}>
        <Tabs></Tabs>
      </Spin>
    )
  }
}
