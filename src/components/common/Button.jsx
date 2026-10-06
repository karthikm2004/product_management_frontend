export default function Button({ children, variant = 'primary', className = '', ...props }) {
  const styles = { primary: 'bg-emerald-800 text-white hover:bg-emerald-900', secondary: 'border border-slate-300 bg-white text-slate-700 hover:bg-slate-50', danger: 'bg-rose-600 text-white hover:bg-rose-700', ghost: 'text-slate-600 hover:bg-slate-100' }
  return <button className={`inline-flex items-center justify-center rounded-xl px-4 py-2.5 text-sm font-semibold transition disabled:cursor-not-allowed disabled:opacity-50 ${styles[variant]} ${className}`} {...props}>{children}</button>
}
