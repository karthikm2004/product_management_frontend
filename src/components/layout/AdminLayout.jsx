import { Link, Outlet } from 'react-router-dom'
import AdminSidebar from './AdminSidebar'
export default function AdminLayout(){return <div className="min-h-screen bg-slate-100 md:flex"><AdminSidebar/><div className="min-w-0 flex-1"><header className="border-b bg-white px-5 py-4"><Link to="/admin/dashboard" className="font-bold text-emerald-900 md:hidden">Product Admin</Link><span className="hidden text-sm font-semibold text-slate-700 md:block">Administration</span></header><main className="mx-auto max-w-6xl p-5 md:p-8"><Outlet/></main></div></div>}
