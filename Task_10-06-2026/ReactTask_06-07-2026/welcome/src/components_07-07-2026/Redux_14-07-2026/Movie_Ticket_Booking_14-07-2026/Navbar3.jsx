import { useSelector } from "react-redux";

function Navbar3() {
    const seats = useSelector((state) => state.booking.seats);

    return (
        <nav>
            
            <h3>Selected Seats: {seats.length}</h3>
            
        </nav>
    );
}
export default Navbar3;