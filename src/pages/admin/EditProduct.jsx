import { useEffect,useState } from 'react'
import { Link,useNavigate,useParams } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import baseUrl from '../../services/baseUrl'
import commonApi from '../../services/commonApi'
import allApi from '../../services/allApi'
import ProductForm from '../../components/ProductForm'
const authHeader=()=>({Authorization:`Bearer ${localStorage.getItem('token')}`})
export default function EditProduct(){const {id}=useParams(),navigate=useNavigate(),[product,setProduct]=useState(null),[error,setError]=useState(''),[loading,setLoading]=useState(false);useEffect(()=>{commonApi('GET',baseUrl+allApi.getProductApi+'/'+id).then(r=>setProduct(r.data)).catch(e=>setError(e.response?.data?.message||'Could not load product'))},[id]);async function submit(e){e.preventDefault();setLoading(true);setError('');try{const form=new FormData(e.currentTarget);await commonApi('PUT',baseUrl+allApi.updateProductApi+'/'+id,form,authHeader());navigate('/admin/products')}catch(err){setError(err.response?.data?.message||'Could not update product')}finally{setLoading(false)}}return <section><Link to="/admin/products" className="mb-5 inline-flex items-center gap-2 text-sm text-emerald-800"><FiArrowLeft/>Products</Link><h1 className="mb-6 text-3xl font-bold">Edit product</h1>{error&&<p className="mb-4 max-w-3xl rounded-xl bg-rose-50 p-3 text-sm text-rose-700">{error}</p>}{product?<ProductForm key={product._id} initial={product} onSubmit={submit} loading={loading}/>:!error&&<p className="py-10 text-center text-slate-500">Loading product…</p>}</section>}
