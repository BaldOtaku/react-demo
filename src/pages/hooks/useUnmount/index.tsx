import Md from './demo.md'
import { useUnmount } from '@/hooks'
import { message } from 'antd'

export default () => {
  useUnmount(() => {
    message.info('unmount')
  })
  
  return (
    <>
      <Md />
    </>
  )
}
