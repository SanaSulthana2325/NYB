import { useState } from "react";
import Props_CP from "../../components_07-07-2026/Child_Parent_08-07-2026/Props_CP";

function Parent_CP() {

  const [message, setMessage] = useState("No Message");
  const [age, setAge] = useState(0);
  const [courses, setCourse] = useState([]);
  const [count, setCount] = useState(0);

  function receiveMessage(data) {
    setMessage(data);
  }

  const receiveCourses = (list) =>{
    setCourse(list);
  };

  const increase = () => {
    setCount(count + 1);
  };
  

  return (
    <>
      <h2>{message}</h2>

      <h2>Age : {age}</h2>

      
      <Props_CP
        sendMessage={receiveMessage}
        sendAge={setAge}
        sendCourse={receiveCourses}
        increase={increase}
      />
      
      {
        courses.map((course, index)=>(
        <h3 key={index}>{course}</h3>
      ))
      }

      <h1>{count}</h1>
    </>
  );
}

export default Parent_CP;