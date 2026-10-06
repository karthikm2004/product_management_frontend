import axios from 'axios'

const api = axios.create({ baseURL: import.meta.env.VITE_API_URL || 'https://product-management-backend-bh15.onrender.com' })
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('pm_token')
  if (token) config.headers.Authorization = `Bearer ${token}`
  return config
})
export const imageUrl = (path) => path ? `${(import.meta.env.VITE_API_URL || 'https://product-management-backend-bh15.onrender.com').replace(/\/api\/?$/, '')}${path}` : ''
export default api
