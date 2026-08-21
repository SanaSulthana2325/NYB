import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Books from "./Components_21-08-2026/React_Router_21-08-2026/Library_21-08-2026/Books";

import Members from "./Components_21-08-2026/React_Router_21-08-2026/Library_21-08-2026/Members";

import BorrowedBooks from "./Components_21-08-2026/React_Router_21-08-2026/Library_21-08-2026/BorrowedBooks";

import Nav from "./Pages_21-08-2026/Nav";

import Book1 from "./Components_21-08-2026/Dynamic_Routing_21-08-2026/Example_21-08-2026/Book1";

import BookDetails from "./Components_21-08-2026/Dynamic_Routing_21-08-2026/Example_21-08-2026/BookDetails";

import Subject from "./Components_21-08-2026/Dynamic_Routing_21-08-2026/Subjects_21-08-2026/Subject";

import SubjectDetails from "./Components_21-08-2026/Dynamic_Routing_21-08-2026/Subjects_21-08-2026/SubjectDetails";
import StudentProfile from "./Components_21-08-2026/Nested_Routing_21-08-2026/Students_21-08-2026/StudentProfile";
import Marks from "./Components_21-08-2026/Nested_Routing_21-08-2026/Students_21-08-2026/Marks";
import Attendance from "./Components_21-08-2026/Nested_Routing_21-08-2026/Students_21-08-2026/Attendance";
import Not from "./Pages_21-08-2026/Not";
import Home11 from "./Components_21-08-2026/404_Pages_21-08-2026/Example2.jsx/Home11";
import Book2 from "./Components_21-08-2026/404_Pages_21-08-2026/Example2.jsx/Book2";
import NotFound from "./Components_21-08-2026/404_Pages_21-08-2026/Example2.jsx/NotFound";
import Login from "./Components_21-08-2026/Protected_Routes_21-08-2026/Login_21-08-2026/Login";
import Dashboard from "./Components_21-08-2026/Protected_Routes_21-08-2026/Login_21-08-2026/Dashboard";
import Protected from "./Components_21-08-2026/Protected_Routes_21-08-2026/Login_21-08-2026/Protected";


function App1() {
  return (
    <BrowserRouter>

      <Nav />
      <Not/>

      <Routes>

        {/* Library Routes */}

        <Route
          path="/books"
          element={<Books />}
        />

        <Route
          path="/members"
          element={<Members />}
        />

        <Route
          path="/borrowed"
          element={<BorrowedBooks />}
        />


        {/* Dynamic Routing */}

        <Route
          path="/book1"
          element={<Book1 />}
        />

        <Route
          path="/book1/:id"
          element={<BookDetails />}
        />


        {/* Multiple Dynamic Routing */}

        <Route
          path="/subject"
          element={<Subject />}
        />

        <Route
          path="/student/:studentId/subject/:subjectId"
          element={<SubjectDetails />}
        />

        {/* Nested Routing */}

<Route
  path="/students/:studentId"
  element={<StudentProfile />}
>
  <Route
    path="marks"
    element={<Marks />}
  />

  <Route
    path="attendance"
    element={<Attendance />}
  />
</Route>
404
<Route path="/" element={<Home11/>}/>
<Route path="/books" element={<Book2/>}/>
<Route path="*" element={<NotFound/>}/>
protected Routes

<Route path="/login" element={<Login/>}/>

<Route path="/dashboard" element={<Protected>
    <Dashboard/>
    </Protected>}/>







      </Routes>

    </BrowserRouter>
  );
}

export default App1;