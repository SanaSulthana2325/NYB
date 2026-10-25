
import {
  createContext,
  useContext,
  useState,
} from 'react'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() =>
    sessionStorage.getItem('employee-user')
  )

  function login(email, password) {
    if (
      email === 'admin@example.com' &&
      password === 'admin123'
    ) {
      sessionStorage.setItem('employee-user', email)
      setUser(email)
      return true
    }
    return false
  }

  function logout() {
    sessionStorage.removeItem('employee-user')
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}
