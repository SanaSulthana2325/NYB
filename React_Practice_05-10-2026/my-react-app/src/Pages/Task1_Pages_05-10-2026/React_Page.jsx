
import { Foot, Head, MainContent, Navbar } from '../../Component/Assigned_Task_05-10-2026/Assign';
import { Aye, Ba, Du, Kar, Na, Sa } from '../../Component/Assigned_Task_05-10-2026/Js_Expression _inside_Jsx';
import { AA, Dada, Fr, Fu, Hu, Ji, Ka, Tata, Wara, Wo } from '../../Component/Assigned_Task_05-10-2026/JSX_Syntax';
import Button1 from '../../Component/Assigned_Task_05-10-2026/Resusable_Component';
import {Add, Fragments,  Render } from '../../Component/Task1_05-10-2026/Fragments';
import {Functional_Component,  Gi, Age } from '../../Component/Task1_05-10-2026/Functional_Component';
import { Class, Da, Image, Ud } from '../../Component/Task1_05-10-2026/JSX_Rule';
import {React_Intro, Button, Welcome, Header, Footer} from '../../Component/Task1_05-10-2026/React_Intro'

function React_Page() {
  return (
    <>
    <React_Intro/>

    <hr/>

    <Button/><br/><br/>
    <Button/>
    {/* Component + JSX */}
    <hr/>

    <Welcome/>
    <p> This is new wrold</p>

    <hr/>
    {/* components */}
    <Header/>
    <p> Welcome to my website this is my page !!!</p>

    <Footer/>

    {/* Functional Components */}
    <hr/>

    <Functional_Component/>

    <hr/>
    <Gi/><br/>
    
   <Age/>
   {/* Rules */}

   <hr/>
   <Image/>
   <hr/>

   <Class/>
   <hr/>
   <Da/>

   <hr />

   <Ud/>
   <hr/><hr/>

   <Fragments/>
   <hr/>
   <Render/>

   {/* Calling functions in components */}

   <hr/>
   <Add/>
   <h1>Result: {Add(30,60)}</h1>



   {/* Assigned Task */}
<hr/><hr/>
<hr/>
   <h1> Assigned Task</h1>
   <h2>multiple functional components</h2>

   <Head/>
   <Navbar/>
   <MainContent/>

   <Foot/>

   <hr/>
   <hr/>
   <h1> JSX Syntax</h1>

   <Fr/>

   <Dada/>
   <br/>
   <Tata/>
   <br/>
   <AA/>
   <br/>
   <Ji/>
   <br/>
   <Wara/>
   <br/>
   <Fu/>
   <br/>
   <Hu/>
   <br/>
   <Ka/>
   <br/>
   <Wo/>

   <hr/>
   <hr/>
   <hr />
   <h1 style={{color:"purple"}}> Javascript expression inside a jsx</h1>

   <Aye/>
   <br/>
   <Sa/>
   <br/>
   <Du/>
   <br/>
   <Kar/>
   <br/>
   <Ba/>
   <hr/>

<h1 style={{color:"pink"}}> Fragments</h1>

<Na/>

<br/>
<hr/>
<h1 style={{color:"green"}}> reusable componenet</h1>

<Button1/><br/>
<Button1/><br/>
<Button1/><br/>
<Button1/><br/>
<Button1/>



   
</>
    
  );
}


export default React_Page





// Welcome → Component
// <h1> and <p> → JSX
// <Welcome /> → Reusable component