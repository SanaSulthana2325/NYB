import { useContext } from "react";
import { StudentContext } from "../Context/StudentContext";

function Navbar() {
  const value = useContext(StudentContext);

  console.log(value);

  return <h2>Navbar</h2>;
}

export default Navbar;