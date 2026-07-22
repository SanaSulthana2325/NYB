import React from 'react'
import Update_Title from '../../components_07-07-2026/Task6_21-07-2026/UseEffect_Hook_21-07-2026/Update_Title'
import No_Dependency_Array from '../../components_07-07-2026/Task6_21-07-2026/UseEffect_Hook_21-07-2026/No_Dependency_Array'
import Dependency_Array from '../../components_07-07-2026/Task6_21-07-2026/UseEffect_Hook_21-07-2026/Dependency_Array'
import Fetch_API from '../../components_07-07-2026/Task6_21-07-2026/UseEffect_Hook_21-07-2026/Fetch_API'
import Timer from '../../components_07-07-2026/Task6_21-07-2026/UseEffect_Hook_21-07-2026/Timer'
import Counter from '../../components_07-07-2026/Task6_21-07-2026/UseEffect_Hook_21-07-2026/Counter'
import CleanUp from '../../components_07-07-2026/Task6_21-07-2026/UseEffect_Hook_21-07-2026/CleanUp'
import Search from '../../components_07-07-2026/Task6_21-07-2026/UseEffect_Hook_21-07-2026/Search'
import Count from '../../components_07-07-2026/Task6_21-07-2026/UseEffect_Dependencies_21-07-2026/UseEffect_Without_Dependency/Count'
import Welcome from '../../components_07-07-2026/Task6_21-07-2026/UseEffect_Dependencies_21-07-2026/UseEffect_Empty_Dependency/Welcome'
import API from '../../components_07-07-2026/Task6_21-07-2026/UseEffect_Dependencies_21-07-2026/UseEffect_Empty_Dependency/API'
import State from '../../components_07-07-2026/Task6_21-07-2026/UseEffect_Dependencies_21-07-2026/UseEffect_With_Dependency/State'
import Timer1 from '../../components_07-07-2026/Task6_21-07-2026/UseEffect_Dependencies_21-07-2026/UseEffect_Cleanup/Timer1'
import Fetch1_API from '../../components_07-07-2026/Task6_21-07-2026/API_Calls_21-07-2026/Fetch1_API'
import Run_Onces from '../../components_07-07-2026/Task6_21-07-2026/UseEffect_Hook_21-07-2026/Run_Onces'

function Task6_page() {
  return (
    <>
    <Run_Onces/>
    <hr/>
    <Update_Title/>
    <hr/>
    <No_Dependency_Array/>
    <hr/>
    <Dependency_Array/>
    <hr/>
    <Fetch_API/>
    <hr/>
    <Timer/>
    <hr/>
    <Counter/>
    <hr/>
    <CleanUp/>
    <hr/>
    <Search/>
    <hr/>
    <h2 className='font-bold'> without dependency Array</h2>
    <Count/>
    <hr/>
    <h2 className='font-bold'>empty dependency</h2>
    <Welcome/>
    <br/>
    <API/>
    <hr/>
    <h2 className='font-bold'>with dependency</h2>
    <State/>
    <hr/>
    <h2 className='font-bold'>cleanup dependency</h2>
    <Timer1/>
    <hr/>
    <h2 className='font-bold'> API calls</h2>
    <Fetch1_API/> 

  


    </>
  )
}

export default Task6_page