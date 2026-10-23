import React from 'react'
import StudentHeader  from '../../Component/Task10_16-10-2026/Task10_16-10-2026/Task10'
import { CalculateTotal } from './../../Component/Task10_16-10-2026/Task10_16-10-2026/Vitest_Jest_Fundamental_16-10-2026/Marks';
import StudentActions  from '../../Component/Task10_16-10-2026/Task10_16-10-2026/React_Testing_Library/StudentActions';
import StudentCard from '../../Component/Task10_16-10-2026/Task10_16-10-2026/Rendering_Components_State/StudentCard';
import StudentCounter from '../../Component/Task10_16-10-2026/Task10_16-10-2026/Testing_User_Interaction/StudentCounter';
import StudentForm from '../../Component/Task10_16-10-2026/Task10_16-10-2026/Testing_Form_Validation/StudentForm';
import Assignments from '../../Component/Task10_16-10-2026/Task10_16-10-2026/Testing_Conditional_Rendering/Assignments';
import StudentList from '../../Component/Task10_16-10-2026/Task10_16-10-2026/Mocking_API_Request/StudentList';
import StudentStatus from '../../Component/Task10_16-10-2026/Task10_16-10-2026/Testing_LOading_Error_State/StudentStatus';
import StudentApp from '../../Component/Task10_16-10-2026/Task10_16-10-2026/Introduction_Integration/StudentApp';
import Button from '../../Component/Task10_16-10-2026/Assigned_Task_16-10-2026/Reusable_Component/Button_16-10-2026/Button';
import Input from '../../Component/Task10_16-10-2026/Assigned_Task_16-10-2026/Reusable_Component/Input_16-10-2026/Input';
import StudentTable from '../../Component/Task10_16-10-2026/Assigned_Task_16-10-2026/Reusable_Component/StudentTable_16-10-2026/StudentTable';

function Task10_Pages() {
  const total = CalculateTotal(80,90)
  return (
    <>
    <StudentHeader/>
    <hr/>
    <br/>
    <h2>Marks Calculation</h2>
      <p>Total Marks: {total}</p>

      <hr/>
      <br/>
      <StudentActions/>
      <hr/>
      <br/>
      <StudentCard/>
      <hr/>
      <br/>
      <StudentCounter/>
      <hr/>
      <br/>
      <StudentForm/>
      <hr/>
      <br/>
      <Assignments/>
      <hr/>
      <br/>
      <StudentList/>
      <hr/>
      <br/>
      <StudentStatus/>
      <hr/>
      <br/>
      <StudentApp/>

      <hr/>
      <br/>
      <br/>
      <hr/>
      <h1>Assigned Task</h1>
      <br/>

      <Button/>
      <br/>
      <Input/>
      <br/>
      <StudentTable/>
      
    </>
  )
}

export default Task10_Pages