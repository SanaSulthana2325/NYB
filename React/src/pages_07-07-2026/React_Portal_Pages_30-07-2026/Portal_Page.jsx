import React from 'react'
import Modal_App from '../../components_07-07-2026/React_Portal_30-07-2026/Modal_30-07-2026/Modal_App'
import Without_Portal from '../../components_07-07-2026/React_Portal_30-07-2026/Without_Portal_30-07-2026/Without_Portal';
import Popup_App from '../../components_07-07-2026/React_Portal_30-07-2026/Popup_30-07-2026/Popup_App';
import Toast_App from '../../components_07-07-2026/React_Portal_30-07-2026/Toast_Notification_30-07-2026/Toast_App';
import Tooltip_App from '../../components_07-07-2026/React_Portal_30-07-2026/Tooltip_30-07-2026/Tooltip_App';
import Dropdown from '../../components_07-07-2026/React_Portal_30-07-2026/Dropdown_30-07-2026/Dropdown';
import Bubbling_App from '../../components_07-07-2026/React_Portal_30-07-2026/Event_Bubbling_30-07-2026/Bubbling_App';
import Example from '../../components_07-07-2026/Event_Binding_30-07-2026/Example';
import Button_Click from '../../components_07-07-2026/Event_Binding_30-07-2026/Button_Click';
import Logging from '../../components_07-07-2026/Event_Binding_30-07-2026/Logging';
import Update_State from '../../components_07-07-2026/Event_Binding_30-07-2026/Update_State';
import Arrow_Function from '../../components_07-07-2026/Event_Binding_30-07-2026/Arrow_Function';
import Passing_Argument from '../../components_07-07-2026/Event_Binding_30-07-2026/Passing_Argument';
import OnChange_Event from '../../components_07-07-2026/Event_Binding_30-07-2026/OnChange_Event';
import Mouse_Hover from '../../components_07-07-2026/Event_Binding_30-07-2026/Mouse_Hover';
import OnDoubleClick from '../../components_07-07-2026/Event_Binding_30-07-2026/OnDoubleClick';
import Form_Submitted from '../../components_07-07-2026/Event_Binding_30-07-2026/Form_Submitted';
import Button from '../../components_07-07-2026/Event_Binding_30-07-2026/Class_Component_30-07-2026/Button';
import Counter from '../../components_07-07-2026/Event_Binding_30-07-2026/Class_Component_30-07-2026/Counter';
import Decrease_Count from '../../components_07-07-2026/Event_Binding_30-07-2026/Class_Component_30-07-2026/Decrease_Count';
import OnChange1 from '../../components_07-07-2026/Event_Binding_30-07-2026/Class_Component_30-07-2026/OnChange1';
import Passing_Parameters from '../../components_07-07-2026/Event_Binding_30-07-2026/Class_Component_30-07-2026/Passing_Parameters';
import Mouse_Event from '../../components_07-07-2026/Event_Binding_30-07-2026/Class_Component_30-07-2026/Mouse_Event';
import Passing_Number from '../../components_07-07-2026/Event_Binding_30-07-2026/Passing_Parameters_30-07-2026/Pass_Number';
import Passing_Multiple_Parameters from '../../components_07-07-2026/Event_Binding_30-07-2026/Passing_Parameters_30-07-2026/Passing_Multiple_Parameters';
import Passing_Loop from '../../components_07-07-2026/Event_Binding_30-07-2026/Passing_Parameters_30-07-2026/Passing_Loop';
import Delete_Button from '../../components_07-07-2026/Event_Binding_30-07-2026/Passing_Parameters_30-07-2026/Delete_Button';
import Functional from '../../components_07-07-2026/Event_Binding_30-07-2026/Inline_Functional_30-07-2026/funtional';
import Inline_Event from '../../components_07-07-2026/Event_Binding_30-07-2026/Inline_Functional_30-07-2026/Inline_Event';
import Focus_Blur from '../../components_07-07-2026/Event_Binding_30-07-2026/Focus_Blur';
import Highlight_Focus from '../../components_07-07-2026/Event_Binding_30-07-2026/Highlight_Focus';

function Portal_Page() {
  return (
    <>
    <h2 className='font-bold'>Modal</h2>
    <br/>
    <Modal_App/>
    <hr/>
    <h2 className='font-bold'>Without Modal</h2>
    <br/>
    <Without_Portal/>
    <hr/>
    <br/>
    <h2 className='font-bold'>POP UP</h2>
    <br/>

    <Popup_App/>

    <hr/>
    <br/>
    <h2 className='font-bold'>Toast</h2>
    <br/>
    <Toast_App/>
    <hr/>
    <br/>
    <h2 className='font-bold'>Tool Tip</h2>
    <Tooltip_App/>

    <hr/>
    <h2 className='font-bold'>DropDown</h2>
    <Dropdown/>
    <hr/>
    <br/>
    <hr/>
    <Bubbling_App/>
    <br/> 
    <hr/>
    <h2 className='font-bold'>Event Binding</h2>
    <Example/>
    <hr/>
    <br/>
    <br/>
    <h2 className='font-bold'> button</h2>
    <Button_Click/>
    <hr/>
    <br/>
    <Logging/>
    <hr/>
    <br/>
    <Update_State/>
    <hr/>
    <br/>
    <Arrow_Function/>
    <hr/>
    <br/>
    <Passing_Argument/>
    <hr/>
    <br/>
    <h2 className='font-bold'>OnChange Event</h2>
    <OnChange_Event/>
    <hr/>
    <br/>
    <Mouse_Hover/>
    <hr/>
    <br/>
    <OnDoubleClick/>
    <hr/>
    <br/>
    <Form_Submitted/>
    <hr/>
    <br/>
    <h2 className='font-bold'>Class Component</h2>
    <Button/>
    <hr/>
    <br/>
    <Counter/>
    <hr/>
    <br/>
    <Decrease_Count/>
    <hr/>
    <br/>
    <OnChange1/>
    <hr/>
    <br/>
    <Passing_Parameters/>
    <hr/>
    <br/>
    <Mouse_Event/>
    <hr/>
    <br/>
    <h2 className='font-bold'>Passing Parameters</h2>
    <br/>
    <Passing_Number/>
    <hr/>
    <br/>
    <Passing_Multiple_Parameters/>
    <hr/>
    <br/>
    <Passing_Loop/>
    <hr/>
    <br/>
    <Delete_Button/>
    <hr/>
    <br/>
    <h2 className='font-bold'>functional and inline event</h2>
    <Functional/>

    <hr/>
    <br/>
    <Inline_Event/>
    <hr/>
    <br/>
    <Focus_Blur/>
    <hr/>
    <br/>
    <Highlight_Focus/>



    
    </>
  )
}

export default Portal_Page