import axios from 'axios'

const api = axios.create({ baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3000/api' })
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('pm_token')
  if (token) config.headers.Authorization = `Bearer ${token}`
  return config
})
export const imageUrl = (path) => path ? `${(import.meta.env.VITE_API_URL || 'http://localhost:3000/api').replace(/\/api\/?$/, '')}${path}` : ''
export default api
