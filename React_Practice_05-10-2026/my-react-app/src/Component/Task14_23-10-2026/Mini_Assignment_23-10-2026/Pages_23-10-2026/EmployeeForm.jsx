
import { useEffect, useRef, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { EmployeeApi } from '../API_23-10-2026/EmployeeApi'
import { UseEmployees } from '../Hooks_23-10-2026/UseEmployees'

const emptyForm = {
  name: '',
  email: '',
  department: 'IT',
  role: '',
  salary: '',
  status: 'Active',
}

export default function EmployeeForm() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { addEmployee, updateEmployee } = UseEmployees()
  const nameRef = useRef(null)
  const [form, setForm] = useState(emptyForm)
  const [loading, setLoading] = useState(Boolean(id))
  const [error, setError] = useState('')

  useEffect(() => {
    if (!id) return

    let cancelled = false
    EmployeeApi.getById(id)
      .then(employee => {
        if (!cancelled) {
          setForm({ ...employee, salary: String(employee.salary) })
        }
      })
      .catch(() => {
        if (!cancelled) setError('Unable to load employee details.')
      })
      .finally(() => {
        if (!cancelled) setLoading(false)
      })

    return () => { cancelled = true }
  }, [id])

  function change(event) {
    setForm(previous => ({
      ...previous,
      [event.target.name]: event.target.value,
    }))
  }

  async function submit(event) {
    event.preventDefault()
    setError('')

    if (!form.name.trim() || !form.role.trim()) {
      setError('Name and job role are required.')
      nameRef.current?.focus()
      return
    }

    if (Number(form.salary) < 0 || form.salary === '') {
      setError('Enter a valid non-negative salary.')
      return
    }

    try {
      if (id) await updateEmployee(id, form)
      else await addEmployee(form)
      navigate('/employees')
    } catch {
      setError('Unable to save employee. Please try again.')
    }
  }

  if (loading) return <p>Loading employee...</p>

  return (
    <section className="mx-auto max-w-2xl">
      <h2 className="mb-6 text-3xl font-bold">
        {id ? 'Edit Employee' : 'Add Employee'}
      </h2>

      <form onSubmit={submit} className="space-y-4 rounded-xl border bg-white p-6 shadow-sm">
        {[
          { name: 'name', label: 'Full name', type: 'text' },
          { name: 'email', label: 'Email address', type: 'email' },
          { name: 'role', label: 'Job role', type: 'text' },
          { name: 'salary', label: 'Monthly salary', type: 'number' },
        ].map(field => (
          <label className="block" key={field.name}>
            <span className="mb-1 block font-medium">{field.label}</span>
            <input
              ref={field.name === 'name' ? nameRef : undefined}
              className="w-full rounded-lg border p-3"
              name={field.name}
              type={field.type}
              min={field.type === 'number' ? '0' : undefined}
              step={field.type === 'number' ? '0.01' : undefined}
              required
              value={form[field.name]}
              onChange={change}
            />
          </label>
        ))}

        <label className="block">
          <span className="mb-1 block font-medium">Department</span>
          <select className="w-full rounded-lg border p-3" name="department" value={form.department} onChange={change}>
            {['IT', 'HR', 'Finance', 'Marketing', 'Sales'].map(d =>
              <option key={d}>{d}</option>
            )}
          </select>
        </label>

        <label className="block">
          <span className="mb-1 block font-medium">Status</span>
          <select className="w-full rounded-lg border p-3" name="status" value={form.status} onChange={change}>
            <option>Active</option>
            <option>Inactive</option>
          </select>
        </label>

        {error && <p role="alert" className="text-red-600">{error}</p>}

        <div className="flex gap-3">
          <button className="rounded-lg bg-blue-600 px-5 py-2 text-white">
            {id ? 'Save Changes' : 'Add Employee'}
          </button>
          <Link className="rounded-lg border px-5 py-2" to="/employees">
            Cancel
          </Link>
        </div>
      </form>
    </section>
  )
}
