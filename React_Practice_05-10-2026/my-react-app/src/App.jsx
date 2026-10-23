
import { useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import React_Page from "./Pages/Task1_Pages_05-10-2026/React_Page";
import Assignment_Page from "./Pages/Task1_Pages_05-10-2026/Assignment_Page";

import Task2_Pages from "./Pages/Task2_Pages_06-10-2026/Task2_Pages";
import Mini_Pages from "./Pages/Task2_Pages_06-10-2026/Mini_Pages";

import Task3_Pages from "./Pages/Task3-Pages_07-10-2026/Task3_Pages";
import Mini1_Pages from "./Pages/Task3-Pages_07-10-2026/Mini1_Pages";

import Task4_pages from "./Pages/Task4_Pages_08-10-2026/Task4_pages";
import Mini2_Pages from "./Pages/Task4_Pages_08-10-2026/Mini2_Pages";

import Task5_Pages from "./Pages/Task5_Pages_09-10-2026/Task5_Pages";
import Mini3_Pages from "./Pages/Task5_Pages_09-10-2026/Mini3_Pages";

import Task6_Pages from "./Pages/Task6_Pages_12-10-2026/Task6_Pages";

import {
  About,
  About1,
  Contact,
  Contact1,
  Dash,
  DashboardLayout,
  Home,
  Home1,
  Login,
  Login1,
  Nav,
  NotFound,
  Overview,
  Pro,
  ProductDetails,
  Profile,
  ProtectedRoute,
  Setting,
} from "./Component/Task6_12-10-2026/Task6_12-10-2026/Task6";
import { StudentDetails, StudentList } from "./Component/Task6_12-10-2026/Assigned_Task_12-10-2026/Assigned";
import Task7_Pages from "./Pages/Task7_Pages_13-10-2026/Task7_Pages";
import Task8_Pages from "./Pages/Task8_Pages_14-10-2026/Task8_Pages";
import Task9_Pages from "./Pages/Task9_Pages_15-10-2026/Task9_Pages";
import Mini4_Pages from "./Pages/Task9_Pages_15-10-2026/Mini4_Pages";
import Task10_Pages from "./Pages/Task10_Pages_16-10-2026/Task10_Pages";
import Task11_Pages from "./Pages/Task11_Pages_21-10-2026/Task11_Pages";
import Mini5_Pages from "./Pages/Task11_Pages_21-10-2026/Mini5_Pages";
import Task12_Pages from "./Pages/Task12_Pages_22-10-2026/Task12_Pages";
import Task14_Pages from "./Pages/Task14_Pages_23-10-2026/Task14_Pages";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        {/* Task Pages */}
        <Route path="/task1" element={<React_Page />} />
        <Route path="/assign1" element={<Assignment_Page />} />

        <Route path="/task2" element={<Task2_Pages />} />
        <Route path="/mini" element={<Mini_Pages />} />

        <Route path="/task3" element={<Task3_Pages />} />
        <Route path="/mini1" element={<Mini1_Pages />} />

        <Route path="/task4" element={<Task4_pages />} />
        <Route path="/mini2" element={<Mini2_Pages />} />

        <Route path="/task5" element={<Task5_Pages />} />
        <Route path="/mini3" element={<Mini3_Pages />} />

        <Route path="/task6" element={<Task6_Pages />} />

        {/* Basic Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/nav" element={<Nav />} />
        <Route path="/contact" element={<Contact />} />

        {/* Dynamic Route */}
        <Route
          path="/products/:id"
          element={<ProductDetails />}
        />

        {/* Assigned */}

        <Route path ="/stu" element={<StudentList/>}/>
        <Route path ="/students" element={<StudentList/>}/>

        <Route path ="/students/:id" element={<StudentDetails/>}/>



        {/* Query Parameter Route */}
        <Route path="/products" element={<Pro />} />

        {/* Normal Login */}
        <Route path="/login" element={<Login />} />

        {/* Protected Route Login */}
        <Route
          path="/log"
          element={
            <Login1
              onLogin={() => setIsLoggedIn(true)}
            />
          }
        />

        {/* Protected Dashboard */}
        <Route
          path="/dash"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <Dash />
            </ProtectedRoute>
          }
        />


        <Route path="/home1" element={<Home1 />} />
        <Route path="/about1" element={<About1 />} />
        <Route path="/contact1" element={<Contact1 />} />


        



        {/* Nested Dashboard Routes */}
        <Route
          path="/dashboard"
          element={<DashboardLayout />}
        >
          <Route index element={<Overview />} />
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Setting />} />
          <Route path="products" element={<Pro />} />
        </Route>

        {/* 404 Route - Keep Last */}
        <Route path="*" element={<NotFound />} />

        <Route path="task7" element={<Task7_Pages />} />

        <Route path="task8" element={<Task8_Pages/>} />
        <Route path="task9" element={<Task9_Pages/>} />
        <Route path="mini4" element={<Mini4_Pages/>} />
        <Route path="task10" element={<Task10_Pages/>} />
        <Route path="task11" element={<Task11_Pages/>} />
        <Route path="mini5" element={<Mini5_Pages/>} />
        <Route path="task12" element={<Task12_Pages/>} />
        <Route path="task14" element={<Task14_Pages/>} />










       

        

      </Routes>
    </BrowserRouter>
  );
}

export default App;