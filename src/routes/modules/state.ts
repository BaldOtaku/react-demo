import Redux from '@/pages/redux'
import Mobx from '@/pages/mobx'
import Context from '@/pages/context'

export default {
  title: '状态管理',
  path: '/state',
  children: [
    {
      title: 'Redux',
      path: '/redux',
      component: Redux
    },
    {
      title: 'Context',
      path: '/context',
      component: Context
    },
    {
      title: 'Mobx',
      path: '/mobx',
      component: Mobx
    }
  ]
}

