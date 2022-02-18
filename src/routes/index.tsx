import Layout from '../components/Layout'
import Home from '../pages/home'
import Redux from '../pages/redux'
import Mobx from '../pages/mobx'

export interface NavItem {
  title?: string
  path?: string
  children?: NavItem[]
}

export const navTree = [
  {
    title: '状态管理',
    path: '/state',
    children: [
      {
        title: 'Redux',
        path: '/redux',
        component: Redux
      },
      {
        title: 'Mobx',
        path: '/mobx',
        component: Mobx
      }
    ]
  }
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
