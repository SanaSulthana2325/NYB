
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Components from './pages_07-07-2026/Components_07-07-2026/Components';
import Props from './pages_07-07-2026/Props_07-07-2026/PropsPage';
import ExpressionPage from './pages_07-07-2026/JsxExpressionPage_07-07-2026/ExpressionPage';
import Props_page from './pages_07-07-2026/Parent_Child_08-07-2026/Props_page';
import Post_page from './pages_07-07-2026/Prop_State_Page/Post_page';
import Valid_Page from './pages_07-07-2026/Valid_Invalid_Page/Valid_Page';
import Invalid_Page from './pages_07-07-2026/Valid_Invalid_Page/Invalid_Page'; 
import State_Page from './pages_07-07-2026/StatePage_08-07-2026/State_Page';
import Fragment_Page from './pages_07-07-2026/Fragment_Page_08-07-2026/Fragment_Page';
import PropsPage_CP from './pages_07-07-2026/Child_Parent_Page_08-07-2026/PropsPage_CP';
import Local_page from './pages_07-07-2026/Local_Page_09-07-2026/Local_page';
import Global_Page from './pages_07-07-2026/Global_Page_09-07-2026/Global_Page';
import Drilling_page from './pages_07-07-2026/Prop_Drilling_Pages_09-07-2026/Drilling_page';
import Context_page from './pages_07-07-2026/ContextApi_Page-09-07-2026/Context_page';
import Local_Globla_page from './pages_07-07-2026/Local_Global_Pages_09-07-2026/Local_Globla_page';
import HTTP_page from './pages_07-07-2026/HTTP_Methods_Page_10-07-2026/HTTP_page';
import Axios_page from './pages_07-07-2026/Axios_page_10-07-2026/Axios_page';
import Async_Page from './pages_07-07-2026/Async_Pages_10-07-2026/Async_Page';
import Error_Page from './pages_07-07-2026/Error_Handling_Page_10-07-2026/Error_Page';
import API_Integration_page from './pages_07-07-2026/API_Integration_Pages_10-07-2026/API_Integration_Page';
import Context_API_Page from "./pages_07-07-2026/Task_Pages_13-07-2026/Context_API_Page_13-07-2026/Context_API_Page";
import Redux_Page from './pages_07-07-2026/Redux_Pages_14-07-2026/Redux_Page';
import Task2_Page from './pages_07-07-2026/Task2_Pages_15-07-2026/Task2_Page';
import Provider_Page from './pages_07-07-2026/Context_Api_Redux_Page_15-07-2026/Provider_Page';
import Task4_Page from './pages_07-07-2026/Task4_Page_16-07-2026/Task4_Page';
import Task5_Page from './pages_07-07-2026/Task5_Pages_17-07-2026/Task5_page';
import Conditional_Rendering_page from './pages_07-07-2026/ConditionalRendering_Pages_20-07-2026/Conditional_Rendering_page';
import MiniPractice_Page from './pages_07-07-2026/MiniPractice_ConditionalRendering_Page_20-07-2026/MiniPractice_Page';
import MiniPractice1_page from './pages_07-07-2026/MiniPractice1_CR_page_20-07-2026/MiniPractice1_page';
import Task6_page from './pages_07-07-2026/Task6_Pages_21-07-2026/Task6_page';
import Form_Handling_page from './pages_07-07-2026/Dynamic_Form_Handling_Pages_22-07-2026/Form_Handling_page';
import HOC_Page from './pages_07-07-2026/Higher_Order_Component_Pages_23-07-2026/HOC_Page';
import Mini_Page from './pages_07-07-2026/Higher_Order_Component_Pages_23-07-2026/Mini_Page';
import Task7_Page from './pages_07-07-2026/Task7_Pages_24-07-2026/Task7_Page';
import API_Calls_Page from './pages_07-07-2026/API_Calls_Pages_27-07-2026/API_Calls_Page';
import React_memo_Pages from './pages_07-07-2026/API_Calls_Pages_27-07-2026/React_memo_Pages';



function App(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/components" element={<Components/>}/>
            <Route path="/props" element={<Props/>}/>
            <Route path="/jsx" element={<ExpressionPage/>}/>
            <Route path="/pc" element={<Props_page/>}/>
            <Route path="/post" element={<Post_page/>}/>
            <Route path="/valid" element={<Valid_Page/>}/>
            <Route path="/invalid" element={<Invalid_Page/>}/>
            <Route path="/state" element={<State_Page/>}/>
            <Route path="/fragment" element={<Fragment_Page/>}/>
            <Route path="/cp" element={<PropsPage_CP/>}/>
            <Route path="/local" element={<Local_page/>}/>
            <Route path="/global" element={<Global_Page/>}/>
            <Route path="/drilling" element={<Drilling_page/>}/>
            <Route path="/context" element={<Context_page/>}/>
            <Route path="/lg" element={<Local_Globla_page/>}/>
            <Route path="/http" element={<HTTP_page/>}/>
            <Route path="/axios" element={<Axios_page/>}/>
            <Route path="/async" element={<Async_Page/>}/>
            <Route path="/error" element={<Error_Page/>}/>
            <Route path="/assignment" element={<API_Integration_page/>}/>
            <Route path="/task1" element={<Context_API_Page/>}/>
            <Route path="/redux" element={<Redux_Page/>}/>
            <Route path="/task2" element={<Task2_Page/>}/>
            <Route path="/task3" element={<Provider_Page/>}/>
            <Route path="/task4" element={<Task4_Page/>}/>
            <Route path="/task5" element={<Task5_Page/>}/>
            <Route path="/cr" element={<Conditional_Rendering_page/>}/>
            <Route path="/mini" element={<MiniPractice_Page/>}/>
            <Route path="/mini1" element={<MiniPractice1_page/>}/>
            <Route path="/task6" element={<Task6_page/>}/>
            <Route path="/form" element={<Form_Handling_page/>}/>
            <Route path="/hoc" element={<HOC_Page/>}/>
            <Route path="/mini3" element={<Mini_Page/>}/>
            <Route path="/task7" element={<Task7_Page/>}/>
            <Route path="/api" element={<API_Calls_Page/>}/>
            <Route path="/memo" element={<React_memo_Pages/>}/>























            



            
            








            
            

        </Routes>
        </BrowserRouter>
    )
}
export default App;
