
import { lazy, Suspense } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  NavLink,
  Outlet,
} from 'react-router-dom'
import { AuthProvider, useAuth } from '../src/Component/Task14_23-10-2026/Mini_Assignment_23-10-2026/Context_23-10-2026/AuthContext'
import ErrorBoundary from './../src/Component/Task14_23-10-2026/Mini_Assignment_23-10-2026/Components_23-10-2026/ErrorBoundary'

const Dashboard = lazy(() => import('./Component/Task14_23-10-2026/Mini_Assignment_23-10-2026/Pages_23-10-2026/Dashboard'))
const EmployeeList = lazy(() => import('./Component/Task14_23-10-2026/Mini_Assignment_23-10-2026/Pages_23-10-2026/EmployeeList'))
const EmployeeDetails = lazy(() => import('./Component/Task14_23-10-2026/Mini_Assignment_23-10-2026/Pages_23-10-2026/EmployeeDetails'))
const EmployeeForm = lazy(() => import('./Component/Task14_23-10-2026/Mini_Assignment_23-10-2026/Pages_23-10-2026/EmployeeForm'))

function ProtectedRoute() {
  const { user } = useAuth()
  return user ? <Outlet /> : <Navigate to="/login" replace />
}

function Login() {
  const { user, login } = useAuth()
  const [email, setEmail] = React.useState('admin@example.com')
  const [password, setPassword] = React.useState('admin123')
  const [error, setError] = React.useState('')
  const navigate = useNavigate()

  if (user) return <Navigate to="/dashboard" replace />

  function submit(event) {
    event.preventDefault()
    if (login(email, password)) navigate('/dashboard')
    else setError('Invalid email or password.')
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100 p-4">
      <form onSubmit={submit} className="w-full max-w-md space-y-4 rounded-2xl bg-white p-8 shadow">
        <h1 className="text-2xl font-bold text-blue-700">Employee Hub</h1>
        <p className="text-slate-500">Sign in to continue</p>
        <input className="w-full rounded-lg border p-3" type="email" required value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
        <input className="w-full rounded-lg border p-3" type="password" required value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
        {error && <p role="alert" className="text-red-600">{error}</p>}
        <button className="w-full rounded-lg bg-blue-600 p-3 text-white">Login</button>
      </form>
    </main>
  )
}

function Layout() {
  const { logout } = useAuth()

  return (
    <div className="min-h-screen md:flex">
      <aside className="bg-slate-900 p-5 text-white md:min-h-screen md:w-60">
        <h1 className="mb-7 text-xl font-bold">Employee Hub</h1>
        <nav className="flex flex-wrap gap-3 md:flex-col">
          <NavLink className="rounded-lg p-2 hover:bg-slate-700" to="/dashboard">Dashboard</NavLink>
          <NavLink className="rounded-lg p-2 hover:bg-slate-700" to="/employees">Employees</NavLink>
          <button className="rounded-lg p-2 text-left hover:bg-slate-700" onClick={logout}>Logout</button>
        </nav>
      </aside>
      <main className="min-w-0 flex-1 p-5 md:p-8">
        <Suspense fallback={<p>Loading page...</p>}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  )
}

function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route element={<ProtectedRoute />}>
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/employees" element={<EmployeeList />} />
          <Route path="/employees/new" element={<EmployeeForm />} />
          <Route path="/employees/:id" element={<EmployeeDetails />} />
          <Route path="/employees/:id/edit" element={<EmployeeForm />} />
        </Route>
      </Route>
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      <Route path="*" element={<p>404 - Page not found</p>} />
    </Routes>
  )
}

export default function App() {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </AuthProvider>
    </ErrorBoundary>
  )
}

// Keep these imports at the top of this file.
import React from 'react'
import { useNavigate } from 'react-router-dom'
