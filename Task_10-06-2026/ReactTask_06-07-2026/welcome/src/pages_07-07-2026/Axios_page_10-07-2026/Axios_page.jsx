
import Add_users_Axios from '../../components_07-07-2026/Axions_10-09-2026/Add_users_Axios';
import Async_Await_Axios from '../../components_07-07-2026/Axions_10-09-2026/Async_Await_Axios';
import Delete_Axios from '../../components_07-07-2026/Axions_10-09-2026/Delete_Axios';
import Error_Handling_Axios from '../../components_07-07-2026/Axions_10-09-2026/Error_Handling_Axios';
import Post_Axios from '../../components_07-07-2026/Axions_10-09-2026/Post_Axios';
import Put_Axios from '../../components_07-07-2026/Axions_10-09-2026/Put_Axios';
import Axios from './../../components_07-07-2026/Axions_10-09-2026/Axios';
import Patch_Axios from './../../components_07-07-2026/Axions_10-09-2026/Patch_Axios';


function Axios_page() {
  return (
    <>
    <Axios/>
    <hr/>
    <h2>POST</h2>
    <Post_Axios/>
    <hr/>
    <Add_users_Axios/>
    <hr/>
    <h2> PUT AXIOS</h2>
    <Put_Axios/>
    <hr/>
    <h2>Patch Axios</h2>
    <Patch_Axios/>
    <hr/>
    <h2>DELETE AXIOS</h2>
    <Delete_Axios/>
<hr/>
    <h2> Error Handling</h2>
    <Error_Handling_Axios/>
    <hr/>
    <h2>Async Await</h2>
    <Async_Await_Axios/>
  
    
    </>
  )
}

export default Axios_page