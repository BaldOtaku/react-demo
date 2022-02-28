import Md from './demo.md'
import { useMount } from '@/hooks'
import { message } from 'antd'

export default () => {
  useMount(() => {
    message.info('mounted')
  })
  
  return (
    <>
      <Md />
    </>
  )
}
