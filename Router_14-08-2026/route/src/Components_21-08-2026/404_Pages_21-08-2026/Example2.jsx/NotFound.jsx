import{ Link } from "react-router-dom"

function NotFound() {
  return (
    <div>
        <h1> 404</h1>
        <h2>Oops! Page not found</h2>
        <p>This page does not exists</p>

        <Link to="/">Go Back Home</Link>


    </div>
  );
}

export default NotFound