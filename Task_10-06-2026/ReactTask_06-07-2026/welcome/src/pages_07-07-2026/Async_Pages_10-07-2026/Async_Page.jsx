import Failure from "../../components_07-07-2026/Async_10-07-2026/Failure"
import Get_Async from "../../components_07-07-2026/Async_10-07-2026/Get_Async"
import Loading from "../../components_07-07-2026/Async_10-07-2026/Loading"
import Post_Async from "../../components_07-07-2026/Async_10-07-2026/Post_Async"
import Promise_Chaining from "../../components_07-07-2026/Async_10-07-2026/Promise_chaining"
import Success from "../../components_07-07-2026/Async_10-07-2026/Success"


function Async_Page() {
  return (
    <>
    <h2> get async </h2>
    <Get_Async/>
    <hr/>
    <h2>post async</h2>
    <Post_Async/>
    <hr/>
    <h2>Promise Chaining</h2>

    <Promise_Chaining/>
    <hr/>
    <h2>Loading</h2>

    <Loading/>
    <hr/>
    <h2>Success</h2>
    <Success/>
    <hr/>
    <h2>Failure</h2>
    <Failure/>
    </>
  )
}

export default Async_Page