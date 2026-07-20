import Conditional_If_else from "../../components_07-07-2026/Conditional_Rendering_20-07-2026/Conditional _If_else";
import Conditional_And from "../../components_07-07-2026/Conditional_Rendering_20-07-2026/Conditional_And";
import Conditional_Ex from "../../components_07-07-2026/Conditional_Rendering_20-07-2026/Conditional_Ex";
import Conditional_Loading from "../../components_07-07-2026/Conditional_Rendering_20-07-2026/Conditional_Loading";
import Conditional_Login from "../../components_07-07-2026/Conditional_Rendering_20-07-2026/Conditional_Login";
import Conditional_Nested from "../../components_07-07-2026/Conditional_Rendering_20-07-2026/Conditional_Nested";
import Conditional_State from "../../components_07-07-2026/Conditional_Rendering_20-07-2026/Conditional_State";
import Conditional_Switch from "../../components_07-07-2026/Conditional_Rendering_20-07-2026/Conditional_Switch";
import Conditional_Ternary from "../../components_07-07-2026/Conditional_Rendering_20-07-2026/Conditional_Ternary";
import Cart from "../../components_07-07-2026/Conditional_Rendering_20-07-2026/Empty_State_20-07-2026/Cart";
import Loading_Empty from "../../components_07-07-2026/Conditional_Rendering_20-07-2026/Empty_State_20-07-2026/Loading_Empty";
import Notification from "../../components_07-07-2026/Conditional_Rendering_20-07-2026/Empty_State_20-07-2026/Notification";
import Loading from "../../components_07-07-2026/Conditional_Rendering_20-07-2026/Loading_State_20-07-2026/Loading";
import Loading_API from "../../components_07-07-2026/Conditional_Rendering_20-07-2026/Loading_State_20-07-2026/Loading_API";
import Loading_useState from "../../components_07-07-2026/Conditional_Rendering_20-07-2026/Loading_State_20-07-2026/Loading_useState";
import Admin_Control from "../../components_07-07-2026/Conditional_Rendering_20-07-2026/Roles_And_Authentication_20-07-2026/Adim_Control";
import Multiple from "../../components_07-07-2026/Conditional_Rendering_20-07-2026/Roles_And_Authentication_20-07-2026/Multiple";
import Details from "../../components_07-07-2026/Conditional_Rendering_20-07-2026/Show_Hide_20-07-2026/Details";
import Password from "../../components_07-07-2026/Conditional_Rendering_20-07-2026/Show_Hide_20-07-2026/Password";
import Using_useState from "../../components_07-07-2026/Conditional_Rendering_20-07-2026/Show_Hide_20-07-2026/Using_useState";
import Conditional_Or from './../../components_07-07-2026/Conditional_Rendering_20-07-2026/Conditional_Or';
function Conditional_Rendering_page() {
  return (
    <>
    <Conditional_If_else/>

    <hr/>
    <h4>ternary</h4>
    <Conditional_Ternary/>
    <hr/>
    <h4>Logical And</h4>
    <Conditional_And/>
    <hr/>
    <h4>logical Or</h4>
    <Conditional_Or/>
    <hr/>
    <h4>loading</h4>
    <Conditional_Loading/>
    <hr/>
    <h4>login and logout</h4>
    <Conditional_Login/>
    <hr/>
    <Conditional_Ex/>
    <hr/>
    <h4>nested</h4>
    <Conditional_Nested/>
    <hr/>
    <h4>Switch</h4>
    <Conditional_Switch/>
    <hr/>
    <h4>  using state</h4>
    <Conditional_State/>

    <hr/>
    <h2> show hide</h2>
    <h4> usestate</h4>
    <Using_useState/>
    <hr/>
    <Password/>
    <hr/>
    <Details/>
    <hr/>
    <h2>Roles And Authentication</h2>
    <Multiple/>
    <hr/>
    <Admin_Control/>
    <hr/>
    <h2>loading State</h2>
    <Loading/>
    <br/>
    <Loading_useState/>
    <br/>
    <Loading_API/>
    <hr/>
    <h2>empty state</h2>
    <Cart/>
    <br/>
    <Notification/>
    <hr/>
    <h2> loading and empty case</h2>
    <Loading_Empty/>

    </>
  )
}

export default Conditional_Rendering_page