import React from 'react'
import Counter from '../../components_07-07-2026/Task12_11-08-2026/useState_11-08-2026/Counter'
import Storing_String from '../../components_07-07-2026/Task12_11-08-2026/useState_11-08-2026/Storing_String'
import Show_Hide from '../../components_07-07-2026/Task12_11-08-2026/useState_11-08-2026/Show_Hide'
import Input_Field from '../../components_07-07-2026/Task12_11-08-2026/useState_11-08-2026/Input_Field'
import Login_Button from '../../components_07-07-2026/Task12_11-08-2026/useState_11-08-2026/Login_Button'
import Multiple_Variables from '../../components_07-07-2026/Task12_11-08-2026/useState_11-08-2026/Multiple_Variables'
import Todo_List from '../../components_07-07-2026/Task12_11-08-2026/useState_11-08-2026/Todo_List'
import API_fetch from '../../components_07-07-2026/Task12_11-08-2026/useEffect_11-08-2026/API_fetch'
import Search_Box from '../../components_07-07-2026/Task12_11-08-2026/useEffect_11-08-2026/Search_Box'
import Timer from '../../components_07-07-2026/Task12_11-08-2026/useEffect_11-08-2026/Timer'
import Single_Product from '../../components_07-07-2026/Task12_11-08-2026/API_11-08-2026/Single_Product'
import Search_Users from '../../components_07-07-2026/Task12_11-08-2026/API_11-08-2026/Search_User'
import Loading from '../../components_07-07-2026/Task12_11-08-2026/Loading_ErrorHandling_11-08-2026/Loading'
import Error_Handling from '../../components_07-07-2026/Task12_11-08-2026/Loading_ErrorHandling_11-08-2026/Error_Handling'
import Input_Field1 from '../../components_07-07-2026/Task12_11-08-2026/useRef_11-08-2026/Input_Field1'
import Input_Value_Without_useState from '../../components_07-07-2026/Task12_11-08-2026/useRef_11-08-2026/Input_Value_Without_useState'
import Counter1 from '../../components_07-07-2026/Task12_11-08-2026/useRef_11-08-2026/Counter1'
import Stopwatch from '../../components_07-07-2026/Task12_11-08-2026/useRef_11-08-2026/Stopwatch'
import Error_Loading from '../../components_07-07-2026/Task12_11-08-2026/Loading_ErrorHandling_11-08-2026/Error _Loading'
import Mini_App from '../../components_07-07-2026/Task12_11-08-2026/Mini_Practice_11-08-2026/Mini_App'

function Task12_Page() {
  return (
    <>
    <h2 className='font-bold'>useState</h2>
    <Counter/>
    <br/>
    <Storing_String/>
    <br/>
    <br/>
    <Show_Hide/>
    <br/>
    <br/>
    <Input_Field/>
    <br/>
    <Login_Button/>
    <br/>
    <hr/>
    <Multiple_Variables/>
    <br/>
    <br/>
    <Todo_List/>
    <hr/>
    <br/>
    <h2 className='font-bold'>useEffect</h2>
    <API_fetch/>
    <br/>
    <br/>
    <Search_Box/>
    <br/>
    <br/>
    <Timer/>
    <br/>
    <hr/>
    <h2 className='font-bold'> API Calls</h2>
    <Single_Product/>


<br/>
<br/>
<Search_Users/>  
<br/>
<hr/>
<br/>
<h2 className='font-bold'> Loading</h2> 
<Loading/>
<br/>
<hr/>
<h2 className='font-bold'> Error Handling</h2>
<Error_Handling/>
<br/>
<br/>
<br/>
<Error_Loading/>
<br/>
<br/>
<hr/>
<br/>
<h2 className='font-bold'>useRef</h2>
<Input_Field1/>
<br/>
<Input_Value_Without_useState/>
<br/>
<br/>
<Counter1/>
<br/>
<br/>
<Stopwatch/>
<br/>
<br/>
<hr/>
<br/>
<br/>
<Mini_App/>

 
    </>
  )
}

export default Task12_Page