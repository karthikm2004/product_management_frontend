import { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../common/Button'
import Toast from '../common/Toast'
import useAuth from '../../hooks/useAuth'
export default function AdminSidebar(){const {logout}=useAuth();const [error,setError]=useState('');const links=[['/admin/dashboard','Dashboard'],['/admin/products','Products'],['/admin/products/add','Add product']];return <aside className="bg-emerald-950 p-5 text-white md:min-h-screen md:w-60 md:shrink-0"><Link to="/admin/dashboard" className="mb-8 block text-xl font-black">Product Admin</Link><nav className="flex gap-2 overflow-x-auto md:flex-col">{links.map(([to,label])=><Link key={to} to={to} className="whitespace-nowrap rounded-xl px-4 py-3 text-sm text-emerald-100 hover:bg-emerald-900">{label}</Link>)}</nav><Button variant="ghost" className="mt-5 text-emerald-100 hover:bg-emerald-900 hover:text-white" onClick={()=>{logout();setError('')}}>Logout</Button><Toast message={error}/></aside>}
