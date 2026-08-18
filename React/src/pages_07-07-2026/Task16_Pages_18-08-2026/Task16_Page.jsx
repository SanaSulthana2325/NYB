import React from 'react'
import Fetch_Data from '../../components_07-07-2026/Task16_18-08-2026/API_Calls_18-08-2026/Fetch_Data'
import Await_Async from '../../components_07-07-2026/Task16_18-08-2026/API_Calls_18-08-2026/Await_Async'
import Loading_State from '../../components_07-07-2026/Task16_18-08-2026/API_Calls_18-08-2026/Loading_State'
import Error_Handling from '../../components_07-07-2026/Task16_18-08-2026/API_Calls_18-08-2026/Error_Handling'
import Post_Add_Date from '../../components_07-07-2026/Task16_18-08-2026/API_Calls_18-08-2026/Post_Add_Data'
import API_Dynamic_ID from '../../components_07-07-2026/Task16_18-08-2026/API_Calls_18-08-2026/API_Dynamic_ID'
import Example from '../../components_07-07-2026/Task16_18-08-2026/Axions_18-08-2026/Example'
import Axios_Post from '../../components_07-07-2026/Task16_18-08-2026/Axions_18-08-2026/Axios_Post'
import Axios_Put from '../../components_07-07-2026/Task16_18-08-2026/Axions_18-08-2026/Axios_Put'
import Axios_Delete from '../../components_07-07-2026/Task16_18-08-2026/Axions_18-08-2026/Axios_Delete'
import With_React from '../../components_07-07-2026/Task16_18-08-2026/Query_Parameter_18-08-2026/With_React'
import Products from '../../components_07-07-2026/Task16_18-08-2026/Query_Parameter_18-08-2026/Products'
import With_Object from '../../components_07-07-2026/Task16_18-08-2026/API_Calls_18-08-2026/With_Object'
import Mini from '../../components_07-07-2026/Task16_18-08-2026/Mini_Practice_18-08-2026/Mini'

function Task16_Page() {
  return (
    <>
    <Fetch_Data/>
    <hr/>
    <br/>
    <Await_Async/>
    <hr/>
    <br/>
    <Loading_State/>
    <hr/>
    <br/>
    <Error_Handling/>
    <hr/>
    <br/>
    <Post_Add_Date/>
    <hr/>
    <br/>
    <With_Object/>
    <br/>
    {/* <API_Dynamic_ID/> */}
    <hr/>
    <br/>
    <h2 className='font-bold'> Axios</h2>
    <Example/>
    <hr/>
    <br/>
    <Axios_Post/>
    <hr/>
    <br/>
    <Axios_Put/>
    <hr/>
    <br/>
    <Axios_Delete/>
    <hr/>
    <br/>
    <h2 className='font-bold'>QUERY PARAMETER</h2>
    <With_React/>
    <hr/>
    <br/>
    <Products/>
    <br/>
    <br/>
    <hr/>
    <br/>
    <hr/>
    <br/>
    <Mini/>
    </>
  )
}

export default Task16_Page