import { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { addItem } from "../features/wishlistSlice";

function Wishlist(){

const [course,setCourse]=useState("");

const dispatch=useDispatch();

const list=useSelector(state=>state.wishlist);

return(

<div>

<input
placeholder="Course"
value={course}
onChange={(e)=>setCourse(e.target.value)}
/>

<button
onClick={()=>dispatch(addItem(course))}
>

Add

</button>

<ul>

{

list.map((item,index)=>

<li key={index}>{item}</li>

)

}

</ul>

</div>

);

}

export default Wishlist;