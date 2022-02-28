```
import { useUnmount } from '@/hooks'
import { message } from 'antd'

export default () => {
  useUnmount(() => {
    message.info('unmount')
  })
  
  return (
    <>
      <div>Hello World<div/>
    </>
  )
}

```