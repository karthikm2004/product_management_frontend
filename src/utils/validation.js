export const validateRegistration = ({ name, email, password, confirmPassword }) => {
  if (!name?.trim()) return 'Name is required.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email || '')) return 'Enter a valid email address.'
  if ((password || '').length < 6) return 'Password must contain at least 6 characters.'
  if (password !== confirmPassword) return 'Passwords do not match.'
  return ''
}
