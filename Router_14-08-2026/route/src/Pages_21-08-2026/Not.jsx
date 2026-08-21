import {Link} from 'react-router-dom'

function Not() {
  return (
    <nav>
        <Link to="/">Home</Link>{"|"}

        <Link to="/books">Books</Link>
    </nav>
  )
}

export default Not