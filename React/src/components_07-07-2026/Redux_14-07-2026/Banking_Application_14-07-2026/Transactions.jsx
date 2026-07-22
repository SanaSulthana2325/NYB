import {useSelector} from "react-redux";


function Transactions(){


const transactions =
useSelector(
(state)=>state.bank.transactions
);


return(

<div>

<h3>Transactions</h3>


{
transactions.map((item,index)=>(

<p key={index}>

{item.type}

₹{item.amount}

</p>

))

}


</div>

);


}


export default Transactions;