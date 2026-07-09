
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


            
            








            
            

        </Routes>
        </BrowserRouter>
    )
}
export default App;
