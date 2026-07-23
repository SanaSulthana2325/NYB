
import Student from "./Student";
import Teacher from "./Teacher";
import withStyle from "./withStyle";

const StyledStudent = withStyle(Student);
const StyledTeacher = withStyle(Teacher);

function Background_App() {
  return (
    <>
      <StyledStudent />
      <StyledTeacher />
    </>
  );
}

export default Background_App;