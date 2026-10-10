import React from 'react'
import { AddEmp, Book, DeleteProduct, Emp, Emp1, Employees, Employees1, Movies, Products, UpdateEmployee, UpdateProduct } from '../../Component/Task4_08-10-2026/Task4_08-10-2026/Task4'
import Assign from '../../Component/Task4_08-10-2026/Assign_08-10-2026/Assign'

function Task4_pages() {
  return (
    <>
    <h1> API calls</h1>
    <Employees/>
    <hr/>
    <br/>
    <h1> Fetch</h1>
    <Movies/>
    <hr/>
    <br/>
    <h1> Axios</h1>
    <Emp/>
    <hr/>
    <br/>
    <h1>Get</h1>
    <Book/>
    <hr/>
    <br/>
    <AddEmp/>
    <hr/>
    <br/>
    <h1>put</h1>
    <UpdateEmployee/>
    <hr/>
    <br/>
    <UpdateProduct/>
    <hr/>
    <br/>
    <DeleteProduct/>
    <hr/>
    <br/>
    <Products/>
    <hr/>
    <br/>
    <Emp1/>
    <hr/>
    <br/>

    <Employees1/>

    <hr/>
    <br/>
    <hr/>
    <Assign/>
    </>
  )
}

export default Task4_pages