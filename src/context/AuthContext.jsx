import { createContext, useEffect, useMemo, useState } from 'react'
import { loginRequest, registerRequest } from '../services/authApi'

export const AuthContext = createContext(null)
export function AuthProvider({ children }) {
  const [token, setToken] = useState(() => localStorage.getItem('pm_token') || '')
  const [user, setUser] = useState(() => { try { return JSON.parse(localStorage.getItem('pm_user') || 'null') } catch { return null } })
  useEffect(() => { if (token) localStorage.setItem('pm_token', token); else localStorage.removeItem('pm_token') }, [token])
  useEffect(() => { if (user) localStorage.setItem('pm_user', JSON.stringify(user)); else localStorage.removeItem('pm_user') }, [user])
  const value = useMemo(() => ({ token, user, isAdmin: user?.role === 'admin', isAuthenticated: Boolean(token && user),
    async login(credentials) { const result = await loginRequest(credentials); const nextUser = result.user || { name: result.username, role: result.role }; localStorage.setItem('pm_token', result.token); localStorage.setItem('pm_user', JSON.stringify(nextUser)); setToken(result.token); setUser(nextUser); return nextUser },
    async register(details) { return registerRequest(details) },
    logout() { setToken(''); setUser(null) }
  }), [token, user])
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

