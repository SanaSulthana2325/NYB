import React from 'react'
import Welcome from '../../components_07-07-2026/Higher_Order_Component_23-07-2026/Welcome_message/Welcome'
import Auth_APP from '../../components_07-07-2026/Higher_Order_Component_23-07-2026/Ahthentication_23-07-2026/Auth_APP'
import Loading_App from "../../components_07-07-2026/Higher_Order_Component_23-07-2026/Loading_23-07-2026/Loading_App";
import Logging_App from '../../components_07-07-2026/Higher_Order_Component_23-07-2026/Logging_23-07-2026/Logging_App.jsx';
import Background_App from '../../components_07-07-2026/Higher_Order_Component_23-07-2026/Background_Color_23-07-2026/Background_App.jsx';
import Passing_App from '../../components_07-07-2026/Higher_Order_Component_23-07-2026/Passing_Extra_Prop_23-07-2026/Passing_App.jsx';
import Counter_App from '../../components_07-07-2026/Higher_Order_Component_23-07-2026/Counter_23-07-2026/Counter_App.jsx';
import Reusable_Loading_App from '../../components_07-07-2026/Higher_Order_Component_23-07-2026/Reusable_HOC_23-07-2026/Reusable_Loading_23-07-2026/Reusable_Loading_App.jsx';
import Authorization_App from './../../components_07-07-2026/Higher_Order_Component_23-07-2026/Authorization_23-07-2026/Authorization_App';
import Hook_App from '../../components_07-07-2026/Higher_Order_Component_23-07-2026/HOC_CustomHook_ComponentComposition_23-07-2026/Custom_Hook/Hook_App.jsx';
import Composition_App from '../../components_07-07-2026/Higher_Order_Component_23-07-2026/HOC_CustomHook_ComponentComposition_23-07-2026/Component_Composition/Composition_App.jsx';

function HOC_Page() {
  return (
    <>
    <Welcome/>
    <hr/>
    <br/>
    <br />
    <h2 className='font-bold'>Authenticatrion</h2>
    <Auth_APP/>
    <hr/>
    <br/>
    <h2 className='font-bold'>loading</h2>
    <Loading_App/>
    <hr/>
    <br/>
    <Logging_App/>

    <hr/>
    <br/>
    <Background_App/>

    <hr/>
    <br/>
    <Passing_App/>
    <hr/>
    <br/>
    <Counter_App/>

    <hr/>
    <br/>
    <h2 className='font-bold'>reusable HOC</h2>
    <Reusable_Loading_App/>
    <hr/>
    <br/>
    <h2 className='font-bold'>Authorization</h2>
    <Authorization_App/>
    <hr/>
    <br/>
    <h2 className='font-bold'>compare of three </h2>
    <br/>
    <h2 className='font-bold'>HOC</h2>
    <Authorization_App/>
    <br/>
    <h2 className='font-bold'>Custom Hook</h2>
    <Hook_App/>
    <br/>
    <h2 className='font-bold'>component composition</h2>
    <br/>
    <Composition_App/>
    
    </>
  )
}

export default HOC_Page