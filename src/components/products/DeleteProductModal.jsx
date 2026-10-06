import Button from '../common/Button'
import Modal from '../common/Modal'
export default function DeleteProductModal({ product, onCancel, onConfirm, busy }) { if (!product) return null; return <Modal title="Delete product?" onClose={onCancel}><p className="text-sm text-slate-600">Delete <b>{product.name}</b>? This action cannot be undone.</p><div className="mt-6 flex justify-end gap-2"><Button variant="secondary" onClick={onCancel}>Cancel</Button><Button variant="danger" disabled={busy} onClick={onConfirm}>{busy ? 'Deleting…' : 'Delete product'}</Button></div></Modal> }
