```
import { useMount } from '@/hooks'
import { message } from 'antd'

export default () => {
  useMount(() => {
    message.info('mounted')
  })
  return (
    <>
      return <div>Hello World</div>
    </>
  )
}
```