import { Navigate, Route, Routes } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import ProtectedRoute from './ProtectedRoute'
import AdminRoute from './AdminRoute'
import AdminLayout from '../components/layout/AdminLayout'
import UserLayout from '../components/layout/UserLayout'
import Login from '../pages/auth/Login'
import Register from '../pages/auth/Register'
import AdminDashboard from '../pages/admin/AdminDashboard'
import AdminProducts from '../pages/admin/AdminProducts'
import AddProduct from '../pages/admin/AddProduct'
import EditProduct from '../pages/admin/EditProduct'
import Home from '../pages/user/Home'
import ProductDetails from '../pages/user/ProductDetails'
import Wishlist from '../pages/user/Wishlist'
export default function AppRoutes() {
 const { isAuthenticated, isAdmin } = useAuth()
 const home = isAuthenticated ? (isAdmin ? '/admin/dashboard' : '/user/home') : '/login'
 return <Routes>
  <Route path="/" element={<Navigate to={home} replace/>}/><Route path="/login" element={<Login/>}/><Route path="/register" element={<Register/>}/>
  <Route element={<AdminRoute/>}><Route path="/admin" element={<AdminLayout/>}><Route index element={<Navigate to="dashboard" replace/>}/><Route path="dashboard" element={<AdminDashboard/>}/><Route path="products" element={<AdminProducts/>}/><Route path="products/add" element={<AddProduct/>}/><Route path="products/edit/:id" element={<EditProduct/>}/></Route></Route>
  <Route element={<ProtectedRoute/>}><Route path="/user" element={<UserLayout/>}><Route index element={<Navigate to="home" replace/>}/><Route path="home" element={<Home/>}/><Route path="products/:id" element={<ProductDetails/>}/><Route path="wishlist" element={<Wishlist/>}/></Route></Route>
  <Route path="*" element={<Navigate to={home} replace/>}/>
 </Routes>
}
