
import Bank1 from '../../components_07-07-2026/Task_2_15-07-2026/Dispatch_15-07-2026/Bank1';
import Counter6 from '../../components_07-07-2026/Task_2_15-07-2026/Dispatch_15-07-2026/Counter6';
import Employee_Management from '../../components_07-07-2026/Task_2_15-07-2026/Reducer_function_ActionTypes_15-07-2026/Employee_Management';
import Todo_List1 from '../../components_07-07-2026/Task_2_15-07-2026/Reducer_function_ActionTypes_15-07-2026/Todo_List1';
import Login_useReducer from '../../components_07-07-2026/Task_2_15-07-2026/useState_useReducer_15-07-2026/Login_Form_15-07-2026/Login_useReducer';
import Login_useState from '../../components_07-07-2026/Task_2_15-07-2026/useState_useReducer_15-07-2026/Login_Form_15-07-2026/Login_useState'
import Cart_useReducer from '../../components_07-07-2026/Task_2_15-07-2026/useState_useReducer_15-07-2026/Shopping_Cart_15-07-2026/Cart_useReducer';
import Cart_useState from '../../components_07-07-2026/Task_2_15-07-2026/useState_useReducer_15-07-2026/Shopping_Cart_15-07-2026/Cart_useState';
import Student_attendance1 from './../../components_07-07-2026/Task_2_15-07-2026/Reducer_function_ActionTypes_15-07-2026/Student_attendance1';

function Task2_Page() {
  return (
    <>
    <Login_useState/>

    <h2> using reducer</h2>
    <Login_useReducer/>

    <hr/>
    <h2>shopping cart</h2>
    <h4>useState</h4>
    <Cart_useState/>
    <h4>useReducer</h4>
    <Cart_useReducer/>

    <hr/>
    <h2>reducer function</h2>
    <h4>employee management</h4>

    <Employee_Management/>
    <hr/>
    <h4> student attendance</h4>
    <Student_attendance1/>

    <hr/>
    <h2>using both useStae and useReducer</h2>
    <h4>todo list</h4>
    <Todo_List1/>

    <hr/>
    <h2> dispatch functionality</h2>
    <Counter6/>

    <hr/>
    <h4>bank application</h4>
    <Bank1/>
    </>
  )
}

export default Task2_Page;