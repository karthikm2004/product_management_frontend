import { useEffect, useState } from 'react'
import { getProducts } from '../services/productApi'
export default function useProducts(params = {}) {
  const [products, setProducts] = useState([]); const [loading, setLoading] = useState(true); const [error, setError] = useState(''); const key = JSON.stringify(Object.fromEntries(Object.entries(params).filter(([, value]) => value !== '' && value !== null && value !== undefined)))
  async function reload() { setLoading(true); setError(''); try { setProducts(await getProducts(JSON.parse(key))) } catch (err) { setError(err.response?.data?.message || 'Could not load products') } finally { setLoading(false) } }
  useEffect(() => { reload() }, [key])
  return { products, loading, error, reload }
}

