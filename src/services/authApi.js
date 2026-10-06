import api from './api'
export const loginRequest = async (credentials) => (await api.post('/signin', credentials)).data
export const registerRequest = async (details) => (await api.post('/signup', details)).data
