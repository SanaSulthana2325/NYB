import {useDispatch} from "react-redux";
import {addToCart} from "../Redux/CartSlice";
import {addToWishlist} from "../Redux/WishListSlice";


function ProductCard({product}){

const dispatch=useDispatch();


return(

<div
style={{
border:"1px solid black",
padding:"10px",
margin:"10px"
}}
>

<h3>{product.name}</h3>

<p>₹{product.price}</p>


<button
onClick={()=>
dispatch(addToCart(product))
}
>
Add Cart
</button>


<button
onClick={()=>{
 console.log(product);
 dispatch(addToWishlist(product));
}}
>
Wishlist
</button>

</div>

);

}

export default ProductCard;