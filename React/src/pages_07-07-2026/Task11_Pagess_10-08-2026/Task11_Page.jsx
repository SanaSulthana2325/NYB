import React from 'react'
import Simple_Example from './../../components_07-07-2026/Task11_10-08-2026/Component_10-08-2026/Simple_Example';
import Reuse_Component from '../../components_07-07-2026/Task11_10-08-2026/Component_10-08-2026/Reuse_Component';
import With_Props from '../../components_07-07-2026/Task11_10-08-2026/Component_10-08-2026/With_Props';
import Product_Component from '../../components_07-07-2026/Task11_10-08-2026/Component_10-08-2026/Product_Component';
import Button_Component from '../../components_07-07-2026/Task11_10-08-2026/Component_10-08-2026/Button_Component';
import Home from '../../components_07-07-2026/Task11_10-08-2026/Component_10-08-2026/Component_Inside_Component_10-08-2026/Home';
import Functional_Component from '../../components_07-07-2026/Task11_10-08-2026/Component_10-08-2026/Diff_FC_CC_10-08-2026/Functional_Component';
import Class_Component from '../../components_07-07-2026/Task11_10-08-2026/Component_10-08-2026/Diff_FC_CC_10-08-2026/Class_Component';
import Student_App from '../../components_07-07-2026/Task11_10-08-2026/Component_10-08-2026/Student_Portal_10-08-2026/Student_App';
import Curly_Braces from '../../components_07-07-2026/Task11_10-08-2026/JSX_10-08-2026/Curly_Braces';
import With_Expression from '../../components_07-07-2026/Task11_10-08-2026/JSX_10-08-2026/With_Expression';
import Calling_Function from '../../components_07-07-2026/Task11_10-08-2026/JSX_10-08-2026/Calling_Function';
import Object_Values from '../../components_07-07-2026/Task11_10-08-2026/JSX_10-08-2026/Object_Values';
import Button from '../../components_07-07-2026/Task11_10-08-2026/JSX_10-08-2026/Button';
import Inline_CSS from '../../components_07-07-2026/Task11_10-08-2026/JSX_10-08-2026/Inline_CSS';
import Passing_Numbers from '../../components_07-07-2026/Task11_10-08-2026/Props_10-08-2026/Passing_Numbers';
import Passing_Boolean from '../../components_07-07-2026/Task11_10-08-2026/Props_10-08-2026/Passing_Boolean';
import Fruit_App from '../../components_07-07-2026/Task11_10-08-2026/Props_10-08-2026/Passing_Array_10-08-2026/Fruit_App';
import Destructuring_Props from '../../components_07-07-2026/Task11_10-08-2026/Props_10-08-2026/Destructuring_Props';
import Card_App from '../../components_07-07-2026/Task11_10-08-2026/Props_10-08-2026/Card_10-08-2026/Card_App';
import Button_App from '../../components_07-07-2026/Task11_10-08-2026/Props_10-08-2026/Passing_Function_10-08-2026/Button_App';
import Counter from '../../components_07-07-2026/Task11_10-08-2026/State_10-08-2026/Counter';
import With_String from '../../components_07-07-2026/Task11_10-08-2026/State_10-08-2026/With_String';
import With_Boolean from '../../components_07-07-2026/Task11_10-08-2026/State_10-08-2026/With_Boolean';
import Input_Box from '../../components_07-07-2026/Task11_10-08-2026/State_10-08-2026/Input_Box';
import Form from '../../components_07-07-2026/Task11_10-08-2026/State_10-08-2026/Form';
import Add_Item_Array from '../../components_07-07-2026/Task11_10-08-2026/State_10-08-2026/Add_Item_Array';
import Theme from '../../components_07-07-2026/Task11_10-08-2026/State_10-08-2026/Theme';
import Product_App from '../../components_07-07-2026/Task11_10-08-2026/Parent_Child_Communication-10-08-2026/Shopping_Cart_10-08-2026/Product_App';
import Login_System from '../../components_07-07-2026/Task11_10-08-2026/Conditional_Rendering_10-08-2026/Login_System';
import If_else from '../../components_07-07-2026/Task11_10-08-2026/Conditional_Rendering_10-08-2026/If_else';
import Ternary from '../../components_07-07-2026/Task11_10-08-2026/Conditional_Rendering_10-08-2026/Ternary';
import Logical_And from '../../components_07-07-2026/Task11_10-08-2026/Conditional_Rendering_10-08-2026/Logical_And';
import Null from '../../components_07-07-2026/Task11_10-08-2026/Conditional_Rendering_10-08-2026/Null';
import Student_Attendance from '../../components_07-07-2026/Task11_10-08-2026/List_Rendering_10-08-2026/Student_Attendance';
import With_State from '../../components_07-07-2026/Task11_10-08-2026/List_Rendering_10-08-2026/With_State';
import Employee_App from '../../components_07-07-2026/Task11_10-08-2026/Mini_Practice_10-08-2026/Employee_App';


function Task11_Page() {
  return (
    <>
    <h2 className='font-bold'>components</h2>
    <Simple_Example/>
    <hr/>
    <h2>Reuse component</h2>
    <br/>
    <Reuse_Component/>
    <br/>
    <Reuse_Component/>
    <Reuse_Component/>
    <hr/>
    <h2 className='font-bold'>Component with props</h2>
    <With_Props name="Tasan" age={22}/>
    <With_Props name="Ali" age={24}/>
    <With_Props name="Priya" age={34}/>
    <hr/>
    <br/>
    <Product_Component name="Laptop" price={50000}/>
    <Product_Component name="Mobile" price={20000}/>
    <Product_Component name="TV" price={50000}/>
    <hr/>
    <br/>
    <h2 className='font-bold'> button component</h2>
    <Button_Component/>
    <Button_Component/>
    <hr/>
    <br/>
    <Home/>
    <hr/>
    <br/>
    <h2 className='font-bold'>Functional </h2>
    <Functional_Component/>
    <br/>
    <h2 className='font-bold'>Class Component </h2>
    <Class_Component/>
    <hr/>
    <br/>
    <Student_App/>
    <hr/>
    <br/>
    <h2 className='font-bold'>Curly Braces</h2>
    <Curly_Braces/>
    <br/>
    <With_Expression/>
    <br/>
    <Calling_Function/>
    <br/>
    <Object_Values/>
    <br/>
    <Button/>
    <br/>
    <Inline_CSS/>
    <br/>
    <hr/>
    <br/>
    <h2 className='font-bold'>Props</h2>
    <Passing_Numbers a={10} b={30}/>
    <br/>
    <Passing_Boolean isLoggedIn={true}/>
    <hr/>
    <br/>
    <Fruit_App/>
    <hr/>
    <br/>
    <Destructuring_Props name='Ayesha' age={45} course='React'/>
    <hr/>
    <br/>
    <Card_App/>
    <br/>
    <Button_App/>
    <hr/>
    <br/>
    <h2 className='font-bold'>State</h2>
    <Counter/>
    <br/>
    <br/>
    <With_String/>
    <br/>
    <With_Boolean/>
    <br/>
    <Input_Box/>
    <br/>
    <Form/>
    <br/>
    <Add_Item_Array/>
    <br/>
    <br/>
    <Theme/>
    <br/>
    <hr/>
    <h2 className='font-bold'>Parent_Child Communication</h2>
    <Product_App/>
    <hr/>
    <br/>
    <h2 className='font-bold'>Conditional Rendering</h2>
    <Login_System/>
    <br/>
    <If_else/>
    <br/>
    <Ternary/>
    <br/>
    <Logical_And/>
    <br/>
    <Null/>
    <hr/>
    <br/>
    <h2 className='font-bold'>List Rendering</h2>
    <Student_Attendance/>
    <br/>
    <With_State/>
    <br/>
    <br/>
    <hr/>
    <hr/>
    <br/>
    <Employee_App/>

    
    
    </> 
  )
}

export default Task11_Page;