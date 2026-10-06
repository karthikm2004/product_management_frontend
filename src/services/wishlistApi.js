import api from './api'
export const getWishlist = async () => (await api.get('/wishlist')).data
export const addWishlistItem = async (id) => (await api.post(`/wishlist/${id}`)).data
export const removeWishlistItem = async (id) => (await api.delete(`/wishlist/${id}`)).data
