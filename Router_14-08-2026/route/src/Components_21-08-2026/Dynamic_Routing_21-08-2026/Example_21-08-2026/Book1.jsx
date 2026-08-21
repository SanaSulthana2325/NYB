import {Link} from 'react-router-dom'

function Book1() {
  return (
    <div>
        <h1> Books</h1>

        <Link to="/books/101"> React Book</Link>||
        <br/>
        <Link to="/books/102"> Js Book</Link>
    </div>
  );
}

export default Book1