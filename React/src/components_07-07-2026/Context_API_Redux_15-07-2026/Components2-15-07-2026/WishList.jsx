import {useSelector} from "react-redux";


function WishList(){

const wishlist=useSelector(
(state)=>state.wishlist
);


return(

<div>

<h2>Wishlist</h2>


{
wishlist.length===0?

<p>No Wishlist Items</p>

:

wishlist.map((item)=>(

<p key={item.id}>
{item.name}
</p>

))

}


</div>

);

}

export default WishList;