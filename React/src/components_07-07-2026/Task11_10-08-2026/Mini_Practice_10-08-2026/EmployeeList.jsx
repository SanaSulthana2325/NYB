import EmployeeCard from './EmpoyeeCard'

function EmployeeList({ employees, onToggle }) {

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

      {employees.map((employee) => (

        <EmployeeCard
          key={employee.id}
          employee={employee}
          onToggle={onToggle}
        />

      ))}

    </div>
  )
}

export default EmployeeList