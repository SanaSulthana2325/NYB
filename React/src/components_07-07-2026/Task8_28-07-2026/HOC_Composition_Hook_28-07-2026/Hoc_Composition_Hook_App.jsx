import UserHOC from "./Higher_Order_Component_28-7-2026/UserHOC";
import UserComposition from "./Composition_28-07-2026/UserComposition";
import UserHooks from "../HOC_Composition_Hook_28-07-2026/Hooks_28-07-2026/UserHooks";


function Hoc_Composition_Hook_App(){

 return(

 <div className="p-10 space-y-5">


 <h1 className="text-3xl font-bold">
   HOC vs Composition vs Hooks
 </h1>


 <UserHOC loading={false}/>


 <UserComposition/>


 <UserHooks/>


 </div>

 )

}


export default Hoc_Composition_Hook_App;