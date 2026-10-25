
const STORAGE_KEY = 'employee-management-data'

const initialEmployees = [
  {
    id: 1,
    name: 'Arun Kumar',
    email: 'arun@example.com',
    department: 'IT',
    role: 'Frontend Developer',
    salary: 45000,
    status: 'Active',
  },
  {
    id: 2,
    name: 'Priya Sharma',
    email: 'priya@example.com',
    department: 'HR',
    role: 'HR Executive',
    salary: 38000,
    status: 'Active',
  },
  {
    id: 3,
    name: 'Rahul Reddy',
    email: 'rahul@example.com',
    department: 'Finance',
    role: 'Accountant',
    salary: 42000,
    status: 'Inactive',
  },
]

const wait = (ms = 300) =>
  new Promise(resolve => setTimeout(resolve, ms))

function readEmployees() {
  const saved = localStorage.getItem(STORAGE_KEY)
  if (saved) return JSON.parse(saved)

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(initialEmployees)
  )
  return initialEmployees
}

function saveEmployees(employees) {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(employees)
  )
}

export const EmployeeApi = {
  async getAll() {
    await wait()
    return readEmployees()
  },

  async getById(id) {
    await wait()
    const employee = readEmployees().find(
      item => item.id === Number(id)
    )
    if (!employee) throw new Error('Employee not found')
    return employee
  },

  async create(data) {
    await wait()
    const employees = readEmployees()

    const employee = {
      ...data,
      id: Date.now(),
      salary: Number(data.salary),
    }

    saveEmployees([...employees, employee])
    return employee
  },

  async update(id, data) {
    await wait()
    const employees = readEmployees()
    const exists = employees.some(
      item => item.id === Number(id)
    )

    if (!exists) throw new Error('Employee not found')

    const updated = employees.map(item =>
      item.id === Number(id)
        ? { ...item, ...data, id: item.id,
            salary: Number(data.salary) }
        : item
    )

    saveEmployees(updated)
    return updated.find(item => item.id === Number(id))
  },

  async remove(id) {
    await wait()
    const employees = readEmployees()
    saveEmployees(
      employees.filter(item => item.id !== Number(id))
    )
  },
}
