import { useState } from "react";

import Header from "./MiniProject_07-07-2026/Header";
import Footer from "./MiniProject_07-07-2026/Footer";
import Student from "./MiniProject_07-07-2026/Student";
import Counter from "./MiniProject_07-07-2026/Counter";
import Parent from "./MiniProject_07-07-2026/Parent";
import SiblingA from "./MiniProject_07-07-2026/SiblingA";
import SiblingB from "./MiniProject_07-07-2026/SiblingB";

function App() {

  const [studentName, setStudentName] = useState("React");

  return (
    <>
      <Header/>

      <Student
        name="Sana"
        age={22}
        course="React JS"
      />

      <hr />

      <Counter />

      <hr />

      <Parent />

      <hr />

      <SiblingA changeName={setStudentName} />

      <SiblingB name={studentName} />

      <Footer />
    </>
  );
}

export default App;