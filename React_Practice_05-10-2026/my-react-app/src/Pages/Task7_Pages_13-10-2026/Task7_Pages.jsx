import React from 'react'
import { Cart, Counter, Ea, Eb, Ec, Ed, EmployeeForm, Employees, StudentMarks, UserProfile } from '../../Component/Task7_13-10-2026/Task7_13-10-2026/Task7'

function Task7_Pages() {
  return (
    <div>

        <EmployeeForm/>
        <hr/>
        <br/>
        <h1> useReducer</h1>
        <Counter/>

        <hr/>
        <br/>
        <h1> Reducer function action</h1>
        <Ea/>
        <hr/>
        <br/>
        <h1>Initial State</h1>
        <Cart/>
        <hr/>
        <br/>
        <h1>Dispatching Actions</h1>
        <StudentMarks/>
        <hr/>
        <br/>
        <h1>Managing Complex Object and arrays</h1>
        <Employees/>
        <hr/>
        <br/>
        <h1> useReducer and context Api</h1>
        <Eb/>
        <hr/>
        <br/>
        <h1> Global state management</h1>
        <Ec/>
        <hr/>
        <br/>
        <h1> Avoid prop drilling</h1>
        <Ed/>
        <hr/>
        <br/>
        <h1>state immutability</h1>
        <UserProfile/>
    </div>
  )
}

export default Task7_Pages