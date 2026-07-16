import { useContext } from "react";
import MovieContext from "./MovieContext";

function Ticket(){

const movie = useContext(MovieContext);

return(

<h2>

Show Time : {movie.time}

</h2>

);

}

export default Ticket;