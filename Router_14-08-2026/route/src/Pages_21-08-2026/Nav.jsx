import {Link} from 'react-router-dom';

function Nav() {
  return (
    <nav>
        <Link to="/books">Books</Link>{" "}
        <Link to="/members">Members</Link>{" "}
        <Link to="/borrowed">Borrowed</Link>


    </nav>
  )
}

export default Nav