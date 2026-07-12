import React from 'react'
import Get from '../../components_07-07-2026/HTTP_Methods_10-07-2026/Get_10-07-2026/Get'
import Get_Example from '../../components_07-07-2026/HTTP_Methods_10-07-2026/Get_10-07-2026/Get_Example'
import Get_Example_2 from '../../components_07-07-2026/HTTP_Methods_10-07-2026/Get_10-07-2026/Get_Example_2'
import Add_Post from '../../components_07-07-2026/HTTP_Methods_10-07-2026/Post_10-07-2026/Add_Post'
import Add_Users from '../../components_07-07-2026/HTTP_Methods_10-07-2026/Post_10-07-2026/Add_Users'
import Put_Example from '../../components_07-07-2026/HTTP_Methods_10-07-2026/Put_10-07-2026/Put_Example'
import Patch_Example from '../../components_07-07-2026/HTTP_Methods_10-07-2026/Patch_10-07-2026/Patch_example'
import Delete from '../../components_07-07-2026/HTTP_Methods_10-07-2026/Delete_10-07-2026/Delete'
import Async_Await from '../../components_07-07-2026/HTTP_Methods_10-07-2026/Async_Await'

function HTTP_page() {
  return (
    <>
    <Get/>

    <hr/>
    <Get_Example/>

    <hr/>

    <Get_Example_2/>
    <hr/>
    <h2>POST</h2>
    <Add_Post/>
    <hr/>

    <Add_Users/>

    <hr/>
    <h2>PUT</h2>

    <Put_Example/>

    <hr/>
    <h2>PATCH</h2>
    <Patch_Example/>
    <hr/>
    <h2>DELETE</h2>
    <Delete/>

    <hr/>
    <h2>Async Await</h2>
    <Async_Await/>
    </>
  )
}

export default HTTP_page