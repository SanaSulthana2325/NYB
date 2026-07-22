import {useSelector} from "react-redux";


function Account(){

const balance = useSelector(
(state)=>state.bank.balance
);


return(

<h2>
Balance : ₹{balance}
</h2>

);

}


export default Account;