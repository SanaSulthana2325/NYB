import React from 'react'
import Get_Request from '../../components_07-07-2026/API_Calls_27-07-2026/Get_Request'
import Async_Await from '../../components_07-07-2026/API_Calls_27-07-2026/Async_Await'
import Loading_State from '../../components_07-07-2026/API_Calls_27-07-2026/Loading_State'
import Error_Handling from '../../components_07-07-2026/API_Calls_27-07-2026/Error_Handling'
import Using_Axios from '../../components_07-07-2026/API_Calls_27-07-2026/Using_Axios'
import Post_Request from '../../components_07-07-2026/API_Calls_27-07-2026/Post_Request'
import Delete_Request from './../../components_07-07-2026/API_Calls_27-07-2026/Delete_Request_27-07-2026/Delete_Request';
import Delete_Product from '../../components_07-07-2026/API_Calls_27-07-2026/Delete_Request_27-07-2026/Delete_Product'
import Put_Request from '../../components_07-07-2026/API_Calls_27-07-2026/Put_Request'
import Display_Card from '../../components_07-07-2026/API_Calls_27-07-2026/Display_Card'
import Async_Await_Loading_Error from '../../components_07-07-2026/API_Calls_27-07-2026/Async_Await_Loading_Eror'
import Loading_Error_Success from '../../components_07-07-2026/API_Calls_27-07-2026/Loading_Error_Success'

function API_Calls_Page() {
  return (
    <>
    <h2 className='font-bold'>get request</h2>
    <Get_Request/>
    <hr/>
    <h2 className='font-bold'>Async-Await</h2>
    <Async_Await/>

    <hr/>
    <br/>
    <h2 className='font-bold'>Loading_State</h2>
    <Loading_State/>
    <hr/>
    <Error_Handling/>
    <hr/>
    <br/>
    <h2 className='font-bold'>using Axios</h2>
    <Using_Axios/>
    <hr/>
    <h2 className='font-bold'>post-request</h2>
    <Post_Request/>
    <hr/>
    <Delete_Request/>
    <hr/>
    <Delete_Product/>
    <hr/>
    <Put_Request/>
    <hr/>
    <Display_Card/>
    <hr/>
    <Async_Await_Loading_Error/>
    <hr/>
    <h2 className='font -bold'>Loading_Error_Success</h2>
    <Loading_Error_Success/>
    </>
  )
}

export default API_Calls_Page