import {useDispatch} from "react-redux";

import {withdraw} from "../Banking_Application_14-07-2026/BankSlice";


function Withdraw(){

const dispatch=useDispatch();


return(

<button

onClick={()=>dispatch(withdraw(2000))}

>

Withdraw ₹2000

</button>

);

}


export default Withdraw;