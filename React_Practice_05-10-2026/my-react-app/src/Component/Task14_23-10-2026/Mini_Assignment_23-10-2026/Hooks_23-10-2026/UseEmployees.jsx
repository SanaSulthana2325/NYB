
import {
  useCallback,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from 'react'
import { EmployeeApi } from '../API_23-10-2026/EmployeeApi'

function reducer(state, action) {
  switch (action.type) {
    case 'SET':
      return action.payload
    case 'ADD':
      return [...state, action.payload]
    case 'UPDATE':
      return state.map(item =>
        item.id === action.payload.id
          ? action.payload
          : item
      )
    case 'DELETE':
      return state.filter(item => item.id !== action.payload)
    default:
      return state
  }
}

export function UseEmployees() {
  const [employees, dispatch] = useReducer(reducer, [])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [search, setSearch] = useState('')
  const [department, setDepartment] = useState('All')
  const [sort, setSort] = useState('name')

  const loadEmployees = useCallback(async () => {
    try {
      setLoading(true)
      setError('')
      const data = await EmployeeApi.getAll()
      dispatch({ type: 'SET', payload: data })
    } catch {
      setError('Unable to load employees. Please try again.')
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    loadEmployees()
  }, [loadEmployees])

  const filteredEmployees = useMemo(() => {
    return employees
      .filter(employee =>
        `${employee.name} ${employee.email} ${employee.role}`
          .toLowerCase()
          .includes(search.toLowerCase())
      )
      .filter(employee =>
        department === 'All' ||
        employee.department === department
      )
      .sort((a, b) =>
        String(a[sort]).localeCompare(String(b[sort]))
      )
  }, [employees, search, department, sort])

  async function addEmployee(data) {
    const employee = await EmployeeApi.create(data)
    dispatch({ type: 'ADD', payload: employee })
  }

  async function updateEmployee(id, data) {
    const employee = await EmployeeApi.update(id, data)
    dispatch({ type: 'UPDATE', payload: employee })
  }

  async function deleteEmployee(id) {
    await EmployeeApi.remove(id)
    dispatch({ type: 'DELETE', payload: Number(id) })
  }

  return {
    employees,
    filteredEmployees,
    loading,
    error,
    search,
    setSearch,
    department,
    setDepartment,
    sort,
    setSort,
    addEmployee,
    updateEmployee,
    deleteEmployee,
    loadEmployees,
  }
}
