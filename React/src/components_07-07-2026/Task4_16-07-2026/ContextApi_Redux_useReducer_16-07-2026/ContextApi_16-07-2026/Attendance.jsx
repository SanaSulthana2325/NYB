import { useContext } from "react";
import AttendanceContext from "./AttendanceContext";

function Attendance() {

  const { markPresent } = useContext(AttendanceContext);

  return (
    <>
      <button onClick={markPresent}>
        Rahul Present
      </button>

      <button onClick={markPresent}>
        Sana Present
      </button>

      <button onClick={markPresent}>
        Priya Present
      </button>
    </>
  );
}

export default Attendance;