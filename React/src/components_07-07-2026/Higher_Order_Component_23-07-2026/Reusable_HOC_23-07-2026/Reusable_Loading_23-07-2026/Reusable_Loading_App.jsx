import Products from "./Products"
import User1 from "./User1"
import withLoading1 from "./withLoading1"



const User1WithLoading = withLoading1(User1);
const ProductsWithLoading = withLoading1(Products);
function Reusable_Loading_App() {
  return (
    <>
    <User1WithLoading 
    loading={false}
    name="Aly"/>

    <ProductsWithLoading 
    loading={true}
    product="Laptop"/> 
    </>
  )
}

export default Reusable_Loading_App