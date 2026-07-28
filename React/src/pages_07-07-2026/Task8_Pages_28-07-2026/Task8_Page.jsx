import React from 'react'
import Using_Div from '../../components_07-07-2026/Task8_28-07-2026/React_Fragments_28-07-2026/Using_Div'
import React_Fragment from '../../components_07-07-2026/Task8_28-07-2026/React_Fragments_28-07-2026/React_Fragment'
import Multiple_Heading from '../../components_07-07-2026/Task8_28-07-2026/React_Fragments_28-07-2026/Multiple_Heading'
import Table from '../../components_07-07-2026/Task8_28-07-2026/React_Fragments_28-07-2026/Table'
import Multiple_Rows_Columns from '../../components_07-07-2026/Task8_28-07-2026/React_Fragments_28-07-2026/Multiple_Rows_Columns'
import Table_Tailwind from '../../components_07-07-2026/Task8_28-07-2026/React_Fragments_28-07-2026/Table_Tailwind'
import List from '../../components_07-07-2026/Task8_28-07-2026/React_Fragments_28-07-2026/List'
import Conditional_Rendering from '../../components_07-07-2026/Task8_28-07-2026/React_Fragments_28-07-2026/Conditional_Rendering'
import Fragments_Key from '../../components_07-07-2026/Task8_28-07-2026/React_Fragments_28-07-2026/Fragments_Key'
import UserCard from '../../components_07-07-2026/Task8_28-07-2026/React_Fragments_28-07-2026/UserCard'
import Employee_Component from '../../components_07-07-2026/Task8_28-07-2026/React_Fragments_28-07-2026/Components_Fragments_28-07-2026/Employee_Component'
import Student_Component from '../../components_07-07-2026/Task8_28-07-2026/React_Fragments_28-07-2026/Components_Fragments_28-07-2026/Student_Component'
import Navbar from '../../components_07-07-2026/Task8_28-07-2026/React_Fragments_28-07-2026/Components_Fragments_28-07-2026/Navbar'
import LoginPage from '../../components_07-07-2026/Task8_28-07-2026/React_Fragments_28-07-2026/Components_Fragments_28-07-2026/LoginPage'
import User_App from '../../components_07-07-2026/Task8_28-07-2026/HOC_28-07-2026/Loading_28-07-2026/User_App'
import Auth_App from '../../components_07-07-2026/Task8_28-07-2026/HOC_28-07-2026/Authentication_28-07-2026/Auth_App'
import Headings from '../../components_07-07-2026/Task8_28-07-2026/HOC_28-07-2026/Component_Composition_28-07-2026/Headings'
import Counter from '../../components_07-07-2026/Task8_28-07-2026/HOC_28-07-2026/Hook_28-07-2026/Counter'
import Hoc_Composition_Hook_App from '../../components_07-07-2026/Task8_28-07-2026/HOC_Composition_Hook_28-07-2026/Hoc_Composition_Hook_App'
import Route_App from '../../components_07-07-2026/Task8_28-07-2026/HOC_28-07-2026/Route_Protection_28-07-2026/Route_App'
import Example_App from '../../components_07-07-2026/Task8_28-07-2026/HOC_28-07-2026/Example_28-07-2026/Example_App'
import Card from '../../components_07-07-2026/Task8_28-07-2026/HOC_Composition_Hook_28-07-2026/Composition_28-07-2026/Card'
import Card_App from '../../components_07-07-2026/Task8_28-07-2026/HOC_28-07-2026/Card_28-07-2026/Card_App'
import Counter_App from '../../components_07-07-2026/Task8_28-07-2026/Custom_Hook_28-07-2026/Counter_28-07-2026/Counter_App'
import Fetch_App from '../../components_07-07-2026/Task8_28-07-2026/Custom_Hook_28-07-2026/Using_Fetch_28-07-2026/Fetch_App'
import Form_App from '../../components_07-07-2026/Task8_28-07-2026/Custom_Hook_28-07-2026/Form_28-07-2026/Form_App'
import Theme_App from '../../components_07-07-2026/Task8_28-07-2026/Custom_Hook_28-07-2026/Theme_28-07-2026/Theme_App'
import Product_App from '../../components_07-07-2026/Task8_28-07-2026/Custom_Hook_28-07-2026/Using_Fetch_28-07-2026/Product_App'
import Window_App from '../../components_07-07-2026/Task8_28-07-2026/Custom_Hook_28-07-2026/Window_Resize_Event_28-07-2026/Window_App'

function Task8_Page() {
  return (
    <>
    <Using_Div/>
    <hr/>
    <React_Fragment/>
    <hr/>
    <br/>
    <Multiple_Heading/>

    <hr/>
    <br/>
    <Table/>
    <hr/>
    <br/>
    <Multiple_Rows_Columns/>
    <hr/>
    <br/>
    <Table_Tailwind/>
    <hr/>
    <List/>
    <hr/>
    <br/>
    <Conditional_Rendering/>

    <hr/>
    <br/>
    <Fragments_Key/>
    <hr/>
    <br/>
    <UserCard/>
    <hr/>
    <h2 className='font-large'>Component fragment</h2>
    <Employee_Component/>
    <hr/>
    <br/>
    <Student_Component/>

    <hr/>
    <br/>
    <Navbar/>
    <hr/>
    <br/>
    <LoginPage/>
    <hr/>
    <hr/>
    <hr/>
    <br/>
    <h2 className='font-bold'>HOC</h2>

    <br/>
    <User_App/>
    <hr/>
    <br/>
    <Auth_App/>
    <hr/>
    <br/>
    <h2 className='font-bold'>Component Composition</h2>
    <Headings/>
    <hr/>
    <br/>
    <h2 className='font-bold'>HOOK</h2>
    <br/>
    <Counter/>
    <hr/>
    <br/>
    <h2 className='font-bold'>comparsion of HOC Hooks and Composition</h2>

    <br/>
    <Hoc_Composition_Hook_App/>
    <hr/>
    <br/>
    <Route_App/>
    <hr/>
    <hr/>
    <br/>
    <Example_App/>
    <hr/>
    <hr/>
    <br/>
    <Card_App/>
    <hr/>
    <hr/>
    <br/>
    <h2 className='font-bold'>CUSTOM HOOK</h2>
    <br/>
    <Counter_App/>
    <hr/>
    <br/>
    <Fetch_App/>
    <hr/>
    <br/>
    <Product_App/>
    <hr/>
    <br/>
    <h2 className='font-bold'>FORM</h2>
    <br/>
    <Form_App/>

    <hr/>
    <br/>
    <h2 className='font-bold'>Theme</h2>
    <br/>
    <Theme_App/>
    <hr/>
    <br/>
    <Window_App/>
    </>
  )
}

export default Task8_Page