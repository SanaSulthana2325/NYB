import React from 'react'

function EmpoyeeCard({employee, onToggle}) {
  return (
    <div className='bg-white p-6 rounded-xl shadow-md'>

        <h2 className='text-xl font-bold text-gray-800'>{employee.name}</h2>

        <p className='text-gray-500 mt-1'>{employee.role}</p>

        <p className='text-gray-500'>Experience: {employee.experience} years</p>

        {/* Conditional Rendering */}

        <div className='mt-4'>
            {employee.active ? (
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full"> Active</span>
            ) : (
                <span className='bg-red-100  text-red-700 px-3 py-1 rounded-full'>In active</span>
            
            )}
        </div>
        <button onClick={() => onToggle(employee.id)}
        className="mt-5 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">Change Status</button>
    </div>
  )
}

export default EmpoyeeCard