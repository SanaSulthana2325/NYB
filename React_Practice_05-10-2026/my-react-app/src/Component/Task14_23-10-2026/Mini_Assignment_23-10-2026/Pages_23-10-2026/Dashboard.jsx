
import { UseEmployees } from '../Hooks_23-10-2026/UseEmployees'

export default function Dashboard() {
  const { employees, loading, error } = UseEmployees()

  if (loading) return <p>Loading dashboard...</p>
  if (error) return <p role="alert" className="text-red-600">{error}</p>

  const active = employees.filter(e => e.status === 'Active').length
  const departments = new Set(employees.map(e => e.department)).size

  const cards = [
    { title: 'Total Employees', value: employees.length },
    { title: 'Active Employees', value: active },
    { title: 'Departments', value: departments },
  ]

  return (
    <section>
      <h2 className="text-3xl font-bold">Dashboard</h2>
      <p className="mb-6 mt-2 text-slate-500">
        Welcome to your Employee Management System.
      </p>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map(card => (
          <div key={card.title} className="rounded-xl border bg-white p-6 shadow-sm">
            <p className="text-slate-500">{card.title}</p>
            <p className="mt-3 text-3xl font-bold text-blue-700">
              {card.value}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
