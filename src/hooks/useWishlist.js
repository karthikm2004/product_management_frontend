import { useCallback, useEffect, useState } from 'react'
import { addWishlistItem, getWishlist, removeWishlistItem } from '../services/wishlistApi'
export default function useWishlist() {
  const [items, setItems] = useState([]); const [loading, setLoading] = useState(true); const [error, setError] = useState('')
  const refresh = useCallback(async () => { setLoading(true); try { setItems(await getWishlist()); setError('') } catch (err) { setError(err.response?.data?.message || 'Could not load wishlist') } finally { setLoading(false) } }, [])
  useEffect(() => { refresh() }, [refresh])
  const has = (id) => items.some((item) => item._id === id)
  const toggle = async (product) => { if (has(product._id)) { await removeWishlistItem(product._id); setItems((all) => all.filter((item) => item._id !== product._id)) } else { await addWishlistItem(product._id); setItems((all) => [...all, product]) } }
  const remove = async (id) => { await removeWishlistItem(id); setItems((all) => all.filter((item) => item._id !== id)) }
  return { items, loading, error, has, toggle, remove, refresh }
}
