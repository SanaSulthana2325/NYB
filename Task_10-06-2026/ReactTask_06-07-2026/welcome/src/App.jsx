
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








            
            

        </Routes>
        </BrowserRouter>
    )
}
export default App;
