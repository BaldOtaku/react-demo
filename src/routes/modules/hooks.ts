import useMount from '@/pages/hooks/useMount'
import useUnmount from '@/pages/hooks/useUnmount'

export default {
  title: 'hooks',
  path: '/hooks',
  children: [
    {
      title: 'useMount',
      path: '/useMount',
      component: useMount
    },
    {
      title: 'useUnmount',
      path: '/useUnmount',
      component: useUnmount
    }
  ]
}

