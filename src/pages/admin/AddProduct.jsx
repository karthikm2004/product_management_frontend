import { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import baseUrl from '../../services/baseUrl'
import commonApi from '../../services/commonApi'
import allApi from '../../services/allApi'
import ProductForm from '../../components/ProductForm'
const authHeader=()=>({Authorization:`Bearer ${localStorage.getItem('token')}`})
export default function AddProduct(){const navigate=useNavigate(),[error,setError]=useState(''),[loading,setLoading]=useState(false);async function submit(e){e.preventDefault();setLoading(true);setError('');try{const form=new FormData(e.currentTarget);await commonApi('POST',baseUrl+allApi.addProductApi,form,authHeader());navigate('/admin/products')}catch(err){setError(err.response?.data?.message||'Could not add product')}finally{setLoading(false)}}return <section><Link to="/admin/products" className="mb-5 inline-flex items-center gap-2 text-sm text-emerald-800"><FiArrowLeft/>Products</Link><h1 className="mb-6 text-3xl font-bold">Add product</h1>{error&&<p className="mb-4 max-w-3xl rounded-xl bg-rose-50 p-3 text-sm text-rose-700">{error}</p>}<ProductForm onSubmit={submit} loading={loading}/></section>}
