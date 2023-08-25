import { Autobind, VueComponent } from 'vue3-oop'
import { RouterLink, useRouter } from 'vue-router'

export default class HomeView extends VueComponent {
  router = useRouter()
  @Autobind()
  handleClick() {
    this.router.push('/demo/count')
  }

  render() {
    return (
      <div>
        我是首页 <RouterLink to={'/demo/count'}>跳转count</RouterLink>
      </div>
    )
  }
}
