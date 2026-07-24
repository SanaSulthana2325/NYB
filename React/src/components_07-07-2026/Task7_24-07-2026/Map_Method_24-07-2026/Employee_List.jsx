

function Employee_List() {
    const employees=[
        {
            id:1,
            name:"Sana",
            department:"HR"
        },
        {
            id:2,
            name:"Rahul",
            department:"IT"
        },

    ];
  return (
    <div className="p-10 bg-gray-100 min-h-screen">
    
    <h1 className="text-4xl text-center font-bold mb-8">
        Employees
    </h1>
    {
        employees.map((employee)=>(
            <div
            key={employee.id}
            className="bg-with p-5 rounded-lg shadow mb-4">
                <h2 className="text-2xl font-bold">
                    {employee.name}
                </h2>

            <p>Department : {employee.department}</p>
            </div>
        ))
        
    }
    </div>
  )
}

export default Employee_List