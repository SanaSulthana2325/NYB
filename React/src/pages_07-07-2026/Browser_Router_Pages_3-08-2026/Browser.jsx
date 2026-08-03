import React from 'react'
import { Link } from 'react-router-dom'

function Browser() {
  return (
    <div><nav className='!pt-5 !p-10'>
            <Link to='/home' className="bg-pink-500 text-white !px-5 !py-2 rounded !mr-4 hover:bg-pink-700"
              >
                Home
            </Link>
            
            <Link to='/about'className="bg-green-500 !pt-2 !p-2 px-5 py-2 rounded !mr-4" >About</Link>
            

            <Link to='/component' className="bg-red-400 !pt-2 !p-2 px-5 py-2 rounded !mr-4">Component</Link>

            <Link to='/contact' className="bg-red-400 !pt-2 !p-2 px-5 py-2 rounded !mr-4">Contact</Link>





        </nav>
        </div>
  )
}

export default Browser


//npm install react-router-dom