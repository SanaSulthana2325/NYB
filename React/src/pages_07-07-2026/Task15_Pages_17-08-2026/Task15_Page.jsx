import React from 'react'
import Simple_Example from '../../components_07-07-2026/Task15_17-08-2026/Controlled_UnControlled_17-08-2026/Controlled_Component_17-08-2026/Simple_Example'
import Login_Form from '../../components_07-07-2026/Task15_17-08-2026/Controlled_UnControlled_17-08-2026/Controlled_Component_17-08-2026/Login_Form'
import Checkbox from '../../components_07-07-2026/Task15_17-08-2026/Controlled_UnControlled_17-08-2026/Controlled_Component_17-08-2026/Checkbox'
import Dropdown from '../../components_07-07-2026/Task15_17-08-2026/Controlled_UnControlled_17-08-2026/Controlled_Component_17-08-2026/Dropdown'
import Input from '../../components_07-07-2026/Task15_17-08-2026/Controlled_UnControlled_17-08-2026/UnControlled_Componenet_17-08-2026/Input'
import Un_Login from '../../components_07-07-2026/Task15_17-08-2026/Controlled_UnControlled_17-08-2026/UnControlled_Componenet_17-08-2026/Un_Login'
import Counter from '../../components_07-07-2026/Task15_17-08-2026/Controlled_UnControlled_17-08-2026/Controlled_Component_17-08-2026/Counter'
import Disable_Button from '../../components_07-07-2026/Task15_17-08-2026/Controlled_UnControlled_17-08-2026/Controlled_Component_17-08-2026/Disable_Button'
import Student_Registration from '../../components_07-07-2026/Task15_17-08-2026/Form_Handling_17-08-2026/Student_Registration'
import Example from '../../components_07-07-2026/Task15_17-08-2026/Form_Validation_17-08-2026/example'
import Email_Validation from '../../components_07-07-2026/Task15_17-08-2026/Form_Validation_17-08-2026/Email_Validation'
import Password_Validation from '../../components_07-07-2026/Task15_17-08-2026/Form_Validation_17-08-2026/Password_Validation'
import Dynamic_Student from '../../components_07-07-2026/Task15_17-08-2026/Dynamic_Form_Fields_17-08-2026/Dynamic_Student'
import Dynamic_Numbers from '../../components_07-07-2026/Task15_17-08-2026/Dynamic_Form_Fields_17-08-2026/Dynamic_Numbers'
import Mini from '../../components_07-07-2026/Task15_17-08-2026/Mini_Practice_17-08-2026/Mini'

function Task15_Page() {
  return (
    <>
    <Simple_Example/>
    <br/>
    <Login_Form/>
    <br/>
    <hr/>
    <Checkbox/>
    <hr/>
    <br/>
    <Dropdown/>
    <hr/>
    <br/>
    <h2 className='font-bold'> UnControlled Component</h2>
    <Input/>
    <br/>
    <hr/>
    <Un_Login/>
    <hr/>
    <br/>
    <Counter/>
    <br/>
    <hr/>
    <br/>
    <Disable_Button/>
    <br/>
    <hr/>
    <br/>
    <h2 className='font-bold'> Form Handling</h2>
    <Student_Registration/>
    <br/>
    <hr/>
    <br/>
    <h2 className='font-bold'>FORM VALIDATION</h2>
    <Example/>

    <br/>
    <br/>
    <hr/>
    <br/>
    <Email_Validation/>
    <br/>
    <hr/>
    <br/>
    <Password_Validation/>
    <br/>
    <hr/>
    <br/>
    <h2 className='font-bold'>DYNAMIC FORM FIELD</h2>
    <Dynamic_Student/>
    <br/>
    <hr/>
    <br/>
    <Dynamic_Numbers/>
    <br/>
    <hr/>
    <hr/>
    <br/>
    <br/>
    <Mini/>

    </>
  )
}

export default Task15_Page