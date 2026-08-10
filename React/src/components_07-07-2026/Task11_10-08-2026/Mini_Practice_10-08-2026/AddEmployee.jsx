import {useState} from 'react'

function AddEmployee({onAdd}) {
    const [name, setName] = useState('')
    const handleAdd = () =>{
        if(name.trim() ==='') {
            return
        }
        onAdd(name)
        setName('')
    }
  return (
    <div className='bg-white p-6 rounded-xl shadow-md mb-8'>
        <h2 className='text-xl font-bold mb-4'>Add Employee</h2>
    <div className="flex gap-3">

        <input 
        type="text"
        value={name}
        onChange={(e)=> setName(e.target.value)}
        placeholder="Enter employee name"
        className="flex-1 border border-gray-300 rounded-lg px-4 py-2"/>

        <button 
        onClick={handleAdd}
        className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-lg"> Add</button>

    </div>
    </div>
  )
}

export default AddEmployee