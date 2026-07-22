import { useContext } from "react";
import AttendanceContext from "./AttendanceContext";

function Navbar8() {

  const { presentCount } = useContext(AttendanceContext);

  return (
    <h2>Present Students : {presentCount}</h2>
  );
}

export default Navbar8;