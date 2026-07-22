
import Expression1 from './../../components_07-07-2026/JSXExpression_07-07-2026/Expression1';




function ExpressionPage() {
  function greet(){
    return "Good Morning"
  }
  const isLogin = true;
  const fruits = ["Apple", "Banana", "Orange"];
  const price=500;
  const quantity = 3;

  return (
    <>
    <Expression1/>
    <br/>

    <h1>{greet()}</h1>
    <h2>
      {isLogin ? "welcome User" : "Please Login"}
    </h2>
    <br/>
    <hr/>
    <h2>display current year</h2>
    <h2>Year : {new Date().getFullYear()}</h2>
    <br/>
    <br/>
    <h2>Array Mapping</h2>
    <ul>
      {fruits.map((fruit, index) =>(
        <li key={index}>{fruit}</li>
      ))}
    </ul>
    
    <br/><hr/>
    <h2>Total Price : ₹{price * quantity}</h2>

    

    
    </>
  )
}

export default ExpressionPage