import Layout from '@/components/Layout'
import Home from '@/pages/home'
import state from './modules/state'

export interface NavItem {
  title?: string
  path?: string
  children?: NavItem[]
}

export const navTree = [
  state
]

function treeToArray (tree: NavItem[]) {
  const list: NavItem[] = []
  tree.forEach((item) => {
    if (item.children) {
      list.push(...treeToArray(item.children))
    } else {
      list.push(item)
    }
  })
  return list
}

export const routes = [
  {
    component: Layout,
    routes: [
      {
        path: '/',
        exact: true,
        component: Home
      },
      ...treeToArray(navTree)
    ]
  }
]
