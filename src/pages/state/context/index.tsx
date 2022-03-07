import { AppProvider } from './context'
import { useAuth } from './context/auth-context'
import { message } from 'antd'

const User = () => {
  const { user, login } = useAuth()!

  const handleLogin = () => {
    login({
      username: 'abcd',
      password: 'Aa123456',
    }).then(() => {
      message.success('登录成功')
    })
  }

  return (
    <div>
      {
        user ? <div>用户: {user.name}</div> : <button onClick={handleLogin}>login</button>
      }
    </div>
  )
}

const App = () => {
  return (
    <AppProvider>
      <User />
    </AppProvider>
  )
}

export default App
