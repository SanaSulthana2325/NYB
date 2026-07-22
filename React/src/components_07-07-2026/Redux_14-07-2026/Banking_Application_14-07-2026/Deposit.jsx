import {useDispatch} from "react-redux";

import {deposit} from "../Banking_Application_14-07-2026/BankSlice";


function Deposit(){

const dispatch=useDispatch();


return(

<button

onClick={()=>dispatch(deposit(5000))}

>

Deposit ₹5000

</button>

);

}


export default Deposit;