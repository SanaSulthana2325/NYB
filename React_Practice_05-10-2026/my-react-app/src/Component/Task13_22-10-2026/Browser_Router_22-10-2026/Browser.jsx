// Client-Side Routing
// Meaning: Client-side routing changes the displayed React component based on the URL without requesting a completely new HTML page from the server for every navigation.

//Link

import {Link} from "react-router-dom";

function Hom (){
    return(
        <>
        <h1> Student Management Sysytem</h1>
        <Link to="/students">View Students</Link>
        </>
    );
}

export { Hom }













// BrowserRouter
// Meaning: BrowserRouter enables routing by using the browser's URL and history system.


// Routes
// Meaning: Routes groups your route definitions and renders the best matching route for the current URL


// Route
// Meaning: Route connects a URL pattern to a React component.


// Link
// Meaning: Link navigates between routes without performing a full browser-page reload.