import{ useState } from "react"
function Valid_Page() {
    function greet(){
        return "Hello World"
    }
    const name = "Minnu";
    const isLogin = true;
    const Student = {
        name : "Aly",
        age: 27
    };
    const colors = ["red","pink","yellow","orange","white"];

    const [count] = useState(5);
    const isAdmin = true;
  return (
    <>
    <h1>Valid Things</h1>
    <h2>Variable</h2>
    <h2>{name}</h2>
    <br/>
    <br/><hr/>
    <h2>number</h2>
    <h2>{1000}</h2>
    <br/><hr/>
    <h2>string</h2>
    <h2>{"react JS"}</h2>
    <br/>
    <hr/>
    <h2>Arthematic</h2>
    <h2>{10 + 80}</h2>
    <h2>{88 - 80}</h2>
    <h2>{78 * 80}</h2>
    <h2>{45 / 80}</h2>
    <br/><hr/>
    <h2> function call</h2>
    <h2>{greet()}</h2>
    <br/><hr/>
    <h2> Ternary Operator</h2>
    <h2>{isLogin ? "welcome" : "please Login"}</h2>
    <br/><hr/>
    <h2> Onject Properties</h2>
    <h2>{Student.name}</h2>
    <h2>{Student.age}</h2>
    <br/><hr/>
    <h2>Array mapping</h2>
    <ul>
        {colors.map((color) =>(
            <li>{color}</li>

        ))}
    </ul>
    <br/><hr/>
      
      <h2>state</h2>
     <h2>{count}</h2>

    <br/><hr/>
     
     <h2>props</h2>
    <br/><hr/>
     
     <h2>logical And</h2>
     {isAdmin && <h2>Welcome Admin</h2>}

     <br/><hr/>
     <h2>Date function</h2>
     <h2>{new Date().getFullYear}</h2>












    </>
  )
}

export default Valid_Page;