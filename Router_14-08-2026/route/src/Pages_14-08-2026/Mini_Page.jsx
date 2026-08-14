// import { useState } from "react";
// import { Routes, Route } from "react-router-dom";


// import Navbar1 from "../Components_14-08-2026/Mini_Practice_14-08-2026/Navbar1";
// import ProtectedRoute1 from "../Components_14-08-2026/Mini_Practice_14-08-2026/ProtectedRoute1";

// import Home2 from "../Components_14-08-2026/Mini_Practice_14-08-2026/Home2";
// import Students from "../Components_14-08-2026/Mini_Practice_14-08-2026/Students";
// import StudentProfile from "../Components_14-08-2026/Mini_Practice_14-08-2026/StudentProfile";
// import Courses from "../Components_14-08-2026/Mini_Practice_14-08-2026/Courses";
// import Login1 from "../Components_14-08-2026/Mini_Practice_14-08-2026/Login1";
// import Dashboard2 from "../Components_14-08-2026/Mini_Practice_14-08-2026/Dashboard2";

// export default function Mini_Page() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   return (
//     <div style={{ padding: "20px" }}>
//       <Navbar1 />

//       <Routes>
//         <Route path="/" element={<Home2 />} />
//         <Route path="/students" element={<Students />} />
//         <Route path="/students/:id" element={<StudentProfile />} />
//         <Route path="/courses" element={<Courses />} />

//         <Route
//           path="/login1"
//           element={<Login1 setIsLoggedIn={setIsLoggedIn} />}
//         />

//         <Route element={<ProtectedRoute1 isLoggedIn={isLoggedIn} />}>
//           <Route path="/dashboard2" element={<Dashboard2 />} />
//         </Route>
//       </Routes>
//     </div>
//   );
// }