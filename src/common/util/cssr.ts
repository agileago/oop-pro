import {
  type CNode,
  type CNodeChildren,
  CssRender,
  type MountOption,
} from 'css-render'

const { c } = CssRender()

type CssRenderStyle<T extends Record<string, any>> = {
  [key in keyof T]: string
} & { cnode: CNode }

export function createStyles<T extends Record<string, CNodeChildren | CNode>>(
  classes: T,
  options?: MountOption<any>,
): CssRenderStyle<T> {
  const child: CNodeChildren = []
  const styles: any = {}
  for (const key of Object.keys(classes)) {
    styles[key] = key
    const node = classes[key]!
    if (Array.isArray(node)) {
      child.push(c('.' + key, node))
    } else {
      node.$ = '.' + key
      child.push(node)
    }
  }
  const cnode = c(child)
  cnode.mount(options)

  styles.cnode = cnode

  return styles
}

export { c as css }
