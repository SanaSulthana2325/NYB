import Example from "../../components_07-07-2026/Task7_24-07-2026/API_Integration_24-07-2026/Example"
import Login from "../../components_07-07-2026/Task7_24-07-2026/Conditional_Rendering_24-07-2026/Login_24-07-2026/Login"
import Shopping from "../../components_07-07-2026/Task7_24-07-2026/Conditional_Rendering_24-07-2026/Shopping_Website/Shopping"
import Results from "../../components_07-07-2026/Task7_24-07-2026/Conditional_Rendering_24-07-2026/Student_Results/Results"
import Student_Form from "../../components_07-07-2026/Task7_24-07-2026/Dynamic_Form_Handling_24-07-2026/Students_Form"
import Loading_App from "../../components_07-07-2026/Task7_24-07-2026/Higher_Order_Component_24-07-2026/Loading_HOC/Loading_HOC_App"
import Student1_App from "../../components_07-07-2026/Task7_24-07-2026/Higher_Order_Component_24-07-2026/Student_HOC/Student1_App"
import Employee_List from "../../components_07-07-2026/Task7_24-07-2026/Map_Method_24-07-2026/Employee_List"
import Product from "../../components_07-07-2026/Task7_24-07-2026/Map_Method_24-07-2026/Product"
import Student from "../../components_07-07-2026/Task7_24-07-2026/Map_Method_24-07-2026/Student"
import Clock from "../../components_07-07-2026/Task7_24-07-2026/useEffect_24-07-2026/Clock"
import Fetch_API from "../../components_07-07-2026/Task7_24-07-2026/useEffect_24-07-2026/Fetch_API"
import Loading_HOC_App from "../../components_07-07-2026/Task7_24-07-2026/Higher_Order_Component_24-07-2026/Loading_HOC/Loading_HOC_App"


function Task7_Page() {
  return (
    <>
    <Login/>

    <br/>
    <Shopping/>
    <hr/>
    <br/>
    <Results/>
    <hr/>
    <h2 className="font-bold">useEffect</h2>
    <br/>
    <Fetch_API/>
    <hr/>
    <br/>
    <Clock/>
    <hr/>
    <br/>
    <h2 className="font-bold">API Integration</h2>
    <Example/>
    <hr/>
    <br/>
    <h2 className="font-bold">Map Method</h2>
    <Student/>
    <br/>
    <br/>
    <Product/>
    <br/>
    <Employee_List/>
    <hr/>
    <br/>
    <h2 className="font-bold">Dynamic Form  Handling</h2>
    <Student_Form/>
    <hr/>
    <br/>
    <h2 className="font-bold">HOC</h2>
    <Student1_App/>

    <hr/>
    <br/>
    <Loading_HOC_App/>
    </>
  )
}

export default Task7_Page