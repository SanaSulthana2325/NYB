import { createContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../../components_07-07-2026/Task5_17-07-2026/Create_Example_MajorConcepts/Redux_fundamental/CounterSlice";

import Parent from "../../components_07-07-2026/Task5_17-07-2026/Create_Example_MajorConcepts/ContextAPI/Parent";
import Home from "../../components_07-07-2026/Task5_17-07-2026/Create_Example_MajorConcepts/useContext_Hook/Home";
import Counter from "../../components_07-07-2026/Task5_17-07-2026/Create_Example_MajorConcepts/useReducer/Counter";
import Student from "../../components_07-07-2026/Task5_17-07-2026/Comparison_17-07-2026/Functional_Class_Component/Functional_component/Student";
import Functional_with_State from "../../components_07-07-2026/Task5_17-07-2026/Comparison_17-07-2026/Functional_Class_Component/Functional_component/Functional_with_State";
import Student2 from "../../components_07-07-2026/Task5_17-07-2026/Comparison_17-07-2026/Functional_Class_Component/Class_Component/Student2";
import Class_with_State from "../../components_07-07-2026/Task5_17-07-2026/Comparison_17-07-2026/Functional_Class_Component/Class_Component/Class_with_State";
import Parent1 from '../../components_07-07-2026/Task5_17-07-2026/Comparison_17-07-2026/Prop_State/Prop_17-07-2026/Passing_Multiple_Prop/Parent1';
import Multiple_State from "../../components_07-07-2026/Task5_17-07-2026/Comparison_17-07-2026/Prop_State/State_17-07-2026/Multiple_State";
import ThemeContext1 from "../../components_07-07-2026/Task5_17-07-2026/Comparison_17-07-2026/ContextAPI_Redux_useReducer/ContextAPI_Theme/ThemeContext1"
import Home1 from "../../components_07-07-2026/Task5_17-07-2026/Comparison_17-07-2026/ContextAPI_Redux_useReducer/ContextAPI_Theme/Home1";
import Cart2 from "../../components_07-07-2026/Task5_17-07-2026/Comparison_17-07-2026/ContextAPI_Redux_useReducer/useReducer/Cart2";
import Counter3 from "../../components_07-07-2026/Task5_17-07-2026/Comparison_17-07-2026/ContextAPI_Redux_useReducer/Redux/Counter3";
import Fetch_Get from "../../components_07-07-2026/Task5_17-07-2026/Comparison_17-07-2026/FetchAPI_Axios/Fetch_API/Fetch_Get";
import Fetch_Post from "../../components_07-07-2026/Task5_17-07-2026/Comparison_17-07-2026/FetchAPI_Axios/Fetch_API/Fetch_Post";
import Fetch_Error from "../../components_07-07-2026/Task5_17-07-2026/Comparison_17-07-2026/FetchAPI_Axios/Fetch_API/Fetch_Error";
import Axios_Get from "../../components_07-07-2026/Task5_17-07-2026/Comparison_17-07-2026/FetchAPI_Axios/Axios/Axios_Get";
import Axios_Post from "../../components_07-07-2026/Task5_17-07-2026/Comparison_17-07-2026/FetchAPI_Axios/Axios/Axios_Post";
import Axios_Async from "../../components_07-07-2026/Task5_17-07-2026/Comparison_17-07-2026/FetchAPI_Axios/Axios/Axios_Async";



export const UserContext = createContext();
export const ThemeContext = createContext();


function Task5_Page() {

const count = useSelector((state) => state.counter.value);

const dispatch = useDispatch();

const theme = "Dark";



  return (
    <>
    <UserContext.Provider value="Sana">
      <Parent />
    </UserContext.Provider>
    <hr/>
    <ThemeContext.Provider value="Dark">
      <Home />
    </ThemeContext.Provider>

    <hr/>
    <h2>{count}</h2>

      <button onClick={() => dispatch(increment())}>
        +
      </button>

      <button onClick={() => dispatch(decrement())}>
        -
      </button>

      <hr/>
      <Counter/>
      <hr/>
      <h4>functional component</h4>

      <Student/>

      <Functional_with_State/>
      <hr/>
      <h4>class componenet</h4>
      <Student2/>

      <Class_with_State/>
      <hr/>
      <h4>prop</h4>
      <Parent1/>

      <h4>state</h4>
      <Multiple_State/>
      <hr/>
      <h4>Context Api</h4>
      <ThemeContext1.Provider value={theme}>
      <Home1/>
    </ThemeContext1.Provider>

    <h4>useReducer</h4>
    <Cart2/>

    <h4> redux</h4>
    <Counter3/>
    <hr/>
    <h4>fetch</h4>
    <Fetch_Get/>
    <br/>
    <Fetch_Post/>
    <br/>
    <Fetch_Error/>
    <h4>Axios</h4>
    <Axios_Get/>
    <br/>
    <Axios_Post/>
    <Axios_Async/>
    

    </>
  );
}

export default Task5_Page;