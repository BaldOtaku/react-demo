import React, { createContext, useState, useContext } from 'react';

interface User {
  name: string
}

interface AuthForm {
  username: string
  password: string
}

export const AuthContext = createContext<{
  user: User | null
  login: (form: AuthForm) => Promise<void>
  logout: () => void
} | undefined>(undefined)

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)

  const login = (form: AuthForm) => {
    return fetch('http://yapi.smart-xwork.cn/mock/81274/login', {
      method: 'POST',
      headers: {
        'content-type': 'application/json;charset=UTF-8'
      },
      body: JSON.stringify(form)
    })
    .then(response => response.json())
    .then((data) => {
      setUser({
        name: data.username
      })
    })
    .catch((err) => {
      console.log(err);
    })
  }
  const logout = () => {
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{user, login, logout}}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(AuthContext)
}
