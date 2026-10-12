import React from 'react'
import { About, Contact, Dashboard, DashboardLayout, Home, Login, Nav, NotFound, Overview, Pro, ProductDetails, Setting } from '../../Component/Task6_12-10-2026/Task6_12-10-2026/Task6'

function Task6_Pages() {
  return (
    <>
    <Home/>

    <About/>

    <br/>
    <Nav/>
    <br/>
    <ProductDetails/>
    <br/>
    <Login/>

    <br/>
    <Dashboard/>
    <br/>
    <h1>Nestes Routing</h1>

    <DashboardLayout/>

    <Overview/>

    <Setting/>
    <br/>
    <Pro/>
    <br/>
    <Contact/>
    <br/>
    <NotFound/>
    </>
  )
}

export default Task6_Pages