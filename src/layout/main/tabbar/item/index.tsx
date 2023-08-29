import {
  Autobind,
  type ComponentProps,
  injectService,
  VueComponent,
} from 'vue3-oop'
import { Dropdown } from '@arco-design/web-vue'
import { forwardRef, type Type } from 'injection-js'
import { Tabbar } from '@/layout/main/tabbar'

export interface TabBarItemProps {
  title: string
  fullPath: string
}

@Autobind()
export class TabBarItem extends VueComponent<TabBarItemProps> {
  static defaultProps: ComponentProps<TabBarItemProps> = ['title', 'fullPath']

  tabbar = injectService<Type<Tabbar>>(forwardRef(() => Tabbar))

  render() {
    return (
      <Dropdown trigger={'contextMenu'} popupMaxHeight={false}>
        {{
          default: () => <div>11</div>,
        }}
      </Dropdown>
    )
  }
}
