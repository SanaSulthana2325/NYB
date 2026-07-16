import { useDispatch } from "react-redux";
import { markPresent } from "./AttendanceSlice";

function Attendance1() {

  const dispatch = useDispatch();

  return (
    <>
      <button
        onClick={() => {
            console.log("Button clicked");
            dispatch(markPresent())}}
      >
        Rahul Present
      </button>

      <button
        onClick={() => dispatch(markPresent())}
      >
        Sana Present
      </button>
    </>
  );
}

export default Attendance1;