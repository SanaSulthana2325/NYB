
import { memo, useState } from 'react'
import { Link } from 'react-router-dom'
import { UseEmployees } from '../Hooks_23-10-2026/UseEmployees'

const EmployeeRow = memo(function EmployeeRow({ employee, onDelete }) {
  return (
    <tr className="border-t">
      <td className="p-3">{employee.name}</td>
      <td className="p-3">{employee.email}</td>
      <td className="p-3">{employee.department}</td>
      <td className="p-3">{employee.role}</td>
      <td className="p-3">{employee.status}</td>
      <td className="space-x-2 p-3">
        <Link className="text-blue-600" to={`/employees/${employee.id}`}>View</Link>
        <Link className="text-amber-600" to={`/employees/${employee.id}/edit`}>Edit</Link>
        <button className="text-red-600" onClick={() => onDelete(employee)}>
          Delete
        </button>
      </td>
    </tr>
  )
})

export default function EmployeeList() {
  const {
    employees, filteredEmployees, loading, error, search, setSearch,
    department, setDepartment, sort, setSort, deleteEmployee, loadEmployees,
  } = UseEmployees()
  const [actionError, setActionError] = useState('')

  async function remove(employee) {
    if (!window.confirm(`Delete ${employee.name}?`)) return

    try {
      setActionError('')
      await deleteEmployee(employee.id)
    } catch {
      setActionError('Unable to delete employee. Please try again.')
    }
  }

  if (loading) return <p>Loading employees...</p>
  if (error) return (
    <div>
      <p role="alert" className="text-red-600">{error}</p>
      <button onClick={loadEmployees}>Retry</button>
    </div>
  )

  return (
    <section>
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-3xl font-bold">Employees</h2>
          <p className="text-slate-500">Search and manage employee records.</p>
        </div>
        <Link to="/employees/new" className="rounded-lg bg-blue-600 px-4 py-2 text-white">
          + Add Employee
        </Link>
      </div>

      <div className="mb-4 grid gap-3 sm:grid-cols-3">
        <input
          className="rounded-lg border bg-white p-3"
          placeholder="Search employees..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <select className="rounded-lg border bg-white p-3" value={department} onChange={e => setDepartment(e.target.value)}>
          {['All', ...new Set(employees.map(e => e.department))].map(d =>
            <option key={d} value={d}>{d}</option>
          )}
        </select>
        <select className="rounded-lg border bg-white p-3" value={sort} onChange={e => setSort(e.target.value)}>
          <option value="name">Sort by name</option>
          <option value="department">Sort by department</option>
          <option value="role">Sort by role</option>
          <option value="status">Sort by status</option>
        </select>
      </div>

      {actionError && <p role="alert" className="mb-3 text-red-600">{actionError}</p>}

      {filteredEmployees.length === 0 ? (
        <div className="rounded-xl border bg-white p-8 text-center">
          No employees found. Try another search or add an employee.
        </div>
      ) : (
        <div className="overflow-x-auto rounded-xl border bg-white">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-100">
              <tr>
                {['Name', 'Email', 'Department', 'Role', 'Status', 'Actions'].map(title =>
                  <th key={title} className="p-3">{title}</th>
                )}
              </tr>
            </thead>
            <tbody>
              {filteredEmployees.map(employee => (
                <EmployeeRow key={employee.id} employee={employee} onDelete={remove} />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  )
}
