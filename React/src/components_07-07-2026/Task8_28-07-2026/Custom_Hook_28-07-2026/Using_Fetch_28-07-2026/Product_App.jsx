import useFetch from "./useFetch";


function Product_App(){

 const {
   data,
   loading
 } = useFetch(
 "https://jsonplaceholder.typicode.com/posts"
 );


 if(loading)
    return <h2>Loading...</h2>;


 return(
  <>
   <h1>Products</h1>

   {
    data.slice(0,5).map(item=>(
      <p key={item.id}>
        {item.title}
      </p>
    ))
   }

  </>
 );

}

export default Product_App;