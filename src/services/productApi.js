import api from './api'
export const getProducts = async (params = {}) => (await api.get('/products', { params })).data
export const getProduct = async (id) => (await api.get(`/products/${id}`)).data
export const createProduct = async (form) => (await api.post('/products', form)).data
export const updateProduct = async (id, form) => (await api.put(`/products/${id}`, form)).data
export const deleteProduct = async (id) => (await api.delete(`/products/${id}`)).data
