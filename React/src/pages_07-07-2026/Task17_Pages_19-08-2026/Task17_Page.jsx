import React from 'react'
import Example_App from '../../components_07-07-2026/Task17_19-08-2026/Context_API_19-08-2026/Example.jsx/Example_App'
import With_Object from '../../components_07-07-2026/Task17_19-08-2026/Context_API_19-08-2026/With_Object'
import With_Theme from '../../components_07-07-2026/Task17_19-08-2026/Context_API_19-08-2026/With_Theme'
import With_useState from '../../components_07-07-2026/Task17_19-08-2026/Context_API_19-08-2026/With_useState'
import Shopping_Cart from '../../components_07-07-2026/Task17_19-08-2026/Context_API_19-08-2026/Shopping_Cart'
import Authentication from '../../components_07-07-2026/Task17_19-08-2026/Context_API_19-08-2026/Authentication'
import Counter from '../../components_07-07-2026/Task17_19-08-2026/useReducer_19-08-2026/Counter'
import Payload_Counter from '../../components_07-07-2026/Task17_19-08-2026/useReducer_19-08-2026/Payload_Counter'
import Object_Reducer from '../../components_07-07-2026/Task17_19-08-2026/useReducer_19-08-2026/Object_Reducer'
import Todo_List from '../../components_07-07-2026/Task17_19-08-2026/useReducer_19-08-2026/Todo_List'

function Task17_Page() {
  return (
    <>
     <Example_App/>
     <hr/>
     <br/>
     <With_Object/>
     <hr/>
     <br/>
     <With_Theme/>
     <br/>
     <br/>
     <With_useState/>
     <hr/>
     <br/>
     <Shopping_Cart/>
     <hr/>
     <br/>
     <Authentication/>
     <br/>
     <hr/>
     <br/>
     <h2 className='font-bold'> useReducer</h2>
     <br/>
     <Counter/>
     <br/>
     <hr/>
     <Payload_Counter/>
     <br/>
     <br/>
     <Object_Reducer/>
     <hr/>
     <br/>
     <Todo_List/>
    </>
  )
}

export default Task17_Page