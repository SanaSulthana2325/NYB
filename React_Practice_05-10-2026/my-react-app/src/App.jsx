
import { BrowserRouter, Routes, Route } from "react-router-dom";

import React_Page from './Pages/Task1_Pages_05-10-2026/React_Page';
import Assignment_Page from './Pages/Task1_Pages_05-10-2026/Assignment_Page';
import Task2_Pages from "./Pages/Task2_Pages_06-10-2026/Task2_Pages";
import Mini_Pages from "./Pages/Task2_Pages_06-10-2026/Mini_Pages";

function App(){
    return(

<BrowserRouter>
<Routes>

  <Route path="task1" element={<React_Page/>}/>
  <Route path="assign1" element={<Assignment_Page/>}/>
  <Route path="task2" element={<Task2_Pages/>}/>
  <Route path="mini" element={<Mini_Pages/>}/>



</Routes>


</BrowserRouter>

 )
}
export default App;
