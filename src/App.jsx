import { Navigate, Outlet, Route, Routes, useLocation } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import AdminDashboard from './pages/admin/AdminDashboard'
import Products from './pages/admin/Products'
import AddProduct from './pages/admin/AddProduct'
import EditProduct from './pages/admin/EditProduct'
import Home from './pages/user/Home'
import ProductDetails from './pages/user/ProductDetails'
import Wishlist from './pages/user/Wishlist'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

function readUser() { try { return JSON.parse(localStorage.getItem('user') || 'null') } catch { return null } }
function ProtectedRoute() { const location=useLocation(); return localStorage.getItem('token') && readUser() ? <Outlet/> : <Navigate to="/login" replace state={{from:location.pathname}}/> }
function AdminRoute() { return readUser()?.role === 'admin' ? <Outlet/> : <Navigate to={localStorage.getItem('token') ? '/user/home' : '/login'} replace/> }
function UserLayout() { return <div className="min-h-screen bg-slate-50"><Navbar/><main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8"><Outlet/></main></div> }
function AdminLayout() { return <div className="min-h-screen bg-slate-100 md:flex"><Sidebar/><main className="min-w-0 flex-1"><div className="border-b bg-white px-6 py-4 text-sm font-semibold text-slate-700">Administration</div><div className="mx-auto max-w-6xl p-5 md:p-8"><Outlet/></div></main></div> }
function App() {
  const user=readUser()
  const home=localStorage.getItem('token') ? (user?.role==='admin'?'/admin/dashboard':'/user/home') : '/login'
  return <Routes><Route path="/" element={<Navigate to={home} replace/>}/><Route path="/login" element={<Login/>}/><Route path="/register" element={<Register/>}/><Route element={<ProtectedRoute/>}><Route element={<AdminRoute/>}><Route path="/admin" element={<AdminLayout/>}><Route index element={<Navigate to="dashboard" replace/>}/><Route path="dashboard" element={<AdminDashboard/>}/><Route path="products" element={<Products/>}/><Route path="products/add" element={<AddProduct/>}/><Route path="products/edit/:id" element={<EditProduct/>}/></Route></Route><Route path="/user" element={<UserLayout/>}><Route index element={<Navigate to="home" replace/>}/><Route path="home" element={<Home/>}/><Route path="products/:id" element={<ProductDetails/>}/><Route path="wishlist" element={<Wishlist/>}/></Route></Route><Route path="*" element={<Navigate to={home} replace/>}/></Routes>
}
export default App
