import { useDispatch} from 'react-redux'

import{addItem } from "./cartSlice";
function Product() {
    const dispatch = useDispatch();

    const product={
        id:1,
        name:"Laptop",
        price: 50000
    };

  return (
    <div>
        <button onClick={()=> dispatch(addItem(product))}
            className='bg-red-600'> Add Laptop</button>
    </div>
  );
}

export default Product;