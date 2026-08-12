import React from 'react'
import Profile_App from '../../components_07-07-2026/Task13_12-08-2026/Context_API_12-08-2026/Username_12-08-2026/Profile_App'
import Theme_App from '../../components_07-07-2026/Task13_12-08-2026/Context_API_12-08-2026/Theme_Toggle_12-08-2026/Theme_App'
import Login_App from '../../components_07-07-2026/Task13_12-08-2026/Context_API_12-08-2026/Login_12-08-2026/Login_App'
import Bank from '../../components_07-07-2026/Task13_12-08-2026/useReducer_12-08-2026/Bank'
import Todo_List from '../../components_07-07-2026/Task13_12-08-2026/useReducer_12-08-2026/Todo_List'

function Task13_Page() {
  return (
    <>
    <h2 className='font-bold'>Context_API</h2>
    <Profile_App/>
    <br /><br/>
    <hr/>

    <Theme_App/>
    <br/>
    <hr/>
    <Login_App/>
    <hr/>
    <br/>
    <h2 className='font-bold'>useReducer</h2>
    <Bank/>
    <br/>
    <br/>
    <Todo_List/>
    </>
  )
}

export default Task13_Page