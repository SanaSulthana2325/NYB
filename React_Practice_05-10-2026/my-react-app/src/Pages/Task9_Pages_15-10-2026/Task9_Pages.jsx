
import React from 'react';

import {
  AddEmployee,
  ControlledInput,
  EmployeeForm,
  EmployeeForm1,
  EmployeeList2,
  EmployeeList1,
  EmployeeSummary,
  Fc,
  Ga,
  Gb,
  Gc,
  UncontrolledInput,
  EmployeeDetails,
  EmpList1,
} from '../../Component/Task9_15-10-2026/Task9_15-10-2026/Task9';
import { Fd, Fe, Ge, Gf, Gg, ModalExample, StuActions, StudentTable } from '../../Component/Task9_15-10-2026/Assigned_Task_15-10-2026/Assign';

function Task9_Pages() {
  return (
    <>
      <Ga />
      <hr />
      <br />

      <EmployeeSummary />
      <hr />
      <br />

      <Gb />
      <hr />
      <br />

      <h1>Component Composition</h1>
      <Gc />
      <hr />
      <br />

      <h1>Controlled Component</h1>
      <ControlledInput />
      <br />
      <br />

      <h1>Uncontrolled Component</h1>
      <UncontrolledInput />
      <hr />
      <br />

      <h1>Reusable Component</h1>
      <EmployeeForm />
      <hr />
      <br />

      <EmployeeForm1 />
      <hr />
      <br />

      <EmployeeList1 />
      <hr />
      <br />

      <AddEmployee />
      <hr />
      <br />

      <Fc />
      <hr />
      <br />

      <EmployeeList2 />
      <hr />
      <br />

      <EmployeeDetails />
      <hr />
      <br />

      <EmpList1 />

      <hr/>
      <br/>
      <hr/>
      <hr/>
      <h1>Refactor a large component into smaller reusable components.</h1>
      <Fd/>
      <hr/>
      <br/>
      <h2>Create reusable input, button, modal, and table components.</h2>
      <h1> resusable input</h1>
      <Fe/>

      <br/>
      <h1>reusable button</h1>
      <StuActions/>
      <br/>
      <h1>reusable modal</h1>
      <ModalExample/>
      <br/>
      <h1> Resuable tables</h1>
      <StudentTable/>
      <hr/>
      <br/>
      <Ge/>
      <br/>
      <hr/>
      <br/>
      <Gf/>
      <hr/>
      <br/>
      <Gg/>
    </>
  );
}


export default Task9_Pages;
