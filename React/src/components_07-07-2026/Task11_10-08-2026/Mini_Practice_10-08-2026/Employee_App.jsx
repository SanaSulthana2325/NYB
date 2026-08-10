import { useState } from 'react'
import EmployeeList from './EmployeeList'
import AddEmployee from './AddEmployee'

function Employee_App() {

  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: 'AAA',
      role: 'Frontend Developer',
      experience: 2,
      active: true
    },
    {
      id: 2,
      name: 'KKK',
      role: 'Backend Developer',
      experience: 3,
      active: false
    },
    {
      id: 3,
      name: 'RRR',
      role: 'UI Designer',
      experience: 2,
      active: true
    }
  ])

  // Change employee status

  const toggleEmployee = (id) => {

    setEmployees(
      employees.map((employee) =>
        employee.id === id
          ? {
              ...employee,
              active: !employee.active
            }
          : employee
      )
    )

  }

  // Add employee

  const addEmployee = (name) => {

    const newEmployee = {
      id: employees.length + 1,
      name: name,
      role: 'Frontend Developer',
      experience: 1,
      active: true
    }

    setEmployees([
      ...employees,
      newEmployee
    ])
  }

  return (

    <div className="min-h-screen bg-gray-100 p-8">

      <div className="max-w-6xl mx-auto">

        <h1 className="text-4xl font-bold text-center text-blue-600">
          Employee Management
        </h1>

        <p className="text-center text-gray-500 mt-2 mb-8">
          Welcome
        </p>

        {/* Add Employee */}

        <AddEmployee
          onAdd={addEmployee}
        />

        {/* Employee List */}

        <EmployeeList
          employees={employees}
          onToggle={toggleEmployee}
        />

      </div>

    </div>

  )
}

export default Employee_App