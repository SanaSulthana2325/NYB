import { useContext } from "react";
import MovieContext from "./MovieContext";

function Seat(){

const movie = useContext(MovieContext);

return(

<h2>

Movie : {movie.title}

</h2>

);

}

export default Seat;