import {Link, Outlet} from "react-router-dom";

function Task10() {
  return (
    <div><nav>
        <h2 className="font-bold">Dynamic rendering</h2>
        <Link to="product/101">Product 101</Link>|
        <br/>
        <Link to="product/202">Product 202</Link>
        <br/>
        <Link to="product/303">Product 303</Link>
        <br/>
        <hr/>
        </nav>
        <Outlet/>
    </div>

    

    
  )
}

export default Task10