
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { EmployeeApi } from '../API_23-10-2026/EmployeeApi'

export default function EmployeeDetails() {
  const { id } = useParams()
  const [employee, setEmployee] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    let cancelled = false

    EmployeeApi.getById(id)
      .then(data => {
        if (!cancelled) setEmployee(data)
      })
      .catch(() => {
        if (!cancelled) setError('Employee not found or unable to load.')
      })
      .finally(() => {
        if (!cancelled) setLoading(false)
      })

    return () => { cancelled = true }
  }, [id])

  if (loading) return <p>Loading employee details...</p>
  if (error) return <p role="alert" className="text-red-600">{error}</p>

  return (
    <section className="max-w-2xl rounded-xl border bg-white p-6">
      <h2 className="mb-4 text-3xl font-bold">{employee.name}</h2>
      {Object.entries(employee).map(([key, value]) => (
        <p key={key} className="border-b py-3 capitalize">
          <strong>{key}: </strong>{value}
        </p>
      ))}
      <Link className="mt-5 inline-block text-blue-600" to="/employees">
        ← Back to employees
      </Link>
    </section>
  )
}
