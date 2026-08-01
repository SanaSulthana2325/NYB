import React from 'react'
import Example from '../../components_07-07-2026/List_Rendering_31-07-2026/Example'
import New_Array from '../../components_07-07-2026/List_Rendering_31-07-2026/New_Array'
import Rendering_Numbers from '../../components_07-07-2026/List_Rendering_31-07-2026/Rendering_Numbers'
import Rendering_Objects from '../../components_07-07-2026/List_Rendering_31-07-2026/Rendering_Objects'
import Rendering_Product_Card from '../../components_07-07-2026/List_Rendering_31-07-2026/Rendering_Product_Card'
import CR_List from '../../components_07-07-2026/List_Rendering_31-07-2026/CR_List'
import Filter_Map from '../../components_07-07-2026/List_Rendering_31-07-2026/Filter_Map'
import Student_App from './../../components_07-07-2026/List_Rendering_31-07-2026/Components_31-07-2026/Student_App';
import Nested_List from '../../components_07-07-2026/List_Rendering_31-07-2026/Nested_List_31-07-2026/Nested'
import Deparment from '../../components_07-07-2026/List_Rendering_31-07-2026/Nested_List_31-07-2026/Deparment'
import Ternary from '../../components_07-07-2026/List_Rendering_31-07-2026/Ternary'
import Show_Passed_Student from '../../components_07-07-2026/List_Rendering_31-07-2026/Conditional_Rendering_List_31-07-2026/Show_Passed_Student'
import Available_Not from '../../components_07-07-2026/List_Rendering_31-07-2026/Conditional_Rendering_List_31-07-2026/Available_Not'
import First_Three_Item from '../../components_07-07-2026/List_Rendering_31-07-2026/Conditional_Rendering_List_31-07-2026/First_Three_Item'
import Example1 from '../../components_07-07-2026/Destructuring_31-07-2026/Example1';
import Object_Destructuring from '../../components_07-07-2026/Destructuring_31-07-2026/Object_Destructuring'
import Default_Values from '../../components_07-07-2026/Destructuring_31-07-2026/Default_Values'
import Array_Destructuring from '../../components_07-07-2026/Destructuring_31-07-2026/Array_Destructuring'
import Swap_Variables from '../../components_07-07-2026/Destructuring_31-07-2026/Swap_Variables'
import Prop_Destructuring from '../../components_07-07-2026/Destructuring_31-07-2026/Prop_Destructuring'
import Rest_Operator from '../../components_07-07-2026/Destructuring_31-07-2026/Rest_Operator'
import Prop_Inside_Component from '../../components_07-07-2026/Destructuring_31-07-2026/Prop_Inside_Component'
import Counter from '../../components_07-07-2026/Destructuring_31-07-2026/Destructuring_useState/Counter'
import Multiple_State_Variable from '../../components_07-07-2026/Destructuring_31-07-2026/Destructuring_useState/Multiple _State_Variable'
import LoadDashboard from '../../components_07-07-2026/Lazy_Loading_31-07-2026/LoadDashboard'
import Profile_App from './../../components_07-07-2026/Lazy_Loading_31-07-2026/Profile_Component_31-07-2026/Profile_App';
import Button_App from '../../components_07-07-2026/Lazy_Loading_31-07-2026/Loading_Button_31-07-2026/Button_App'

function List_Page() {
  return (
    <>
    <Example/>
    <hr/>
    <br/>
    <New_Array/>
    <hr/>
    <br/>
    <Rendering_Numbers/>
    <hr/>
    <br/>
    <Rendering_Objects/>
    <hr/>
    <br/>
    <Rendering_Product_Card/>
    <hr/>
    <br/>
    <CR_List/>
    <hr/>
    <br/>
    <Filter_Map/>
    <hr/>
    <br/>
    <Student_App/>
    <hr/>
    <br/>
    <h2 className='font-bold'>Nested List</h2>
    <Nested_List/>
    <hr/>
    <br/>
    <Deparment/>
    <hr/>
    <br/>
    <Ternary/>
    <hr/>
    <br/>
    <h2 className='font-bold'>CONDITIONAL RENDERING</h2>
    <br/>
    <Show_Passed_Student/>
    <hr/>
    <br/>
    <Available_Not/>
    <hr/>
    <br/>
    <First_Three_Item/>
    <hr/>
    <hr/>
    <h2 className='font-bold'>DESTRUCTURING</h2>
    <Example1/>
    <hr/>
    <br/>
    <Object_Destructuring/>
    <hr/>
    <br/>
    <Default_Values/>
    <hr/>
    <br/>
    <Array_Destructuring/>
    <hr/>
    <br/>
    <Swap_Variables/>
    <hr/>
    <br/>
    <Prop_Destructuring/>
    <hr/>
    <br/>
    <Rest_Operator/>
    <hr/>
    <br/>
    <Prop_Inside_Component/>
    <hr/>
    <br/>
    <h2 className='font-bold'>DESTRUCTURING USING useSTATE</h2>
    <Counter/>
    <hr/>
    <br/>
    <Multiple_State_Variable/>
    <hr/>
    <br/>
    <h2 className='font-bold'>LAZY LOADING</h2>
    <LoadDashboard/>
    <hr/>
    <br/>
    <Profile_App/>
    <hr/>
    <br/>
    <Button_App/>

    </>
  )
}

export default List_Page