import React from 'react'
import Parent from '../../components_07-07-2026/Task14_13-08-2026/React.Memo_13-08-2026/With_React_13-08-206/Parent'
import Prop_Parent from '../../components_07-07-2026/Task14_13-08-2026/React.Memo_13-08-2026/With_Prop.jsx/Prop_Parent'
import Change_Prop from '../../components_07-07-2026/Task14_13-08-2026/React.Memo_13-08-2026/With_Prop.jsx/Change_Prop'
import With_useMemo from '../../components_07-07-2026/Task14_13-08-2026/useMemo_13-08-2026/With_useMemo'
import Factorial from '../../components_07-07-2026/Task14_13-08-2026/useMemo_13-08-2026/Factorial'
import Object_Parent from '../../components_07-07-2026/Task14_13-08-2026/useMemo_13-08-2026/with_Object_13-08-2026/Object_Parent'
import Multiple_Dependencies from '../../components_07-07-2026/Task14_13-08-2026/useMemo_13-08-2026/Multiple_Dependencies'
import UseCallback_Parent from '../../components_07-07-2026/Task14_13-08-2026/useCallback_13-08-2026/useCallback_Example_13-08-2026/UseCallback_Parent';
import With_useEffect from '../../components_07-07-2026/Task14_13-08-2026/useCallback_13-08-2026/With_useEffect';
import Multiple_Callback from '../../components_07-07-2026/Task14_13-08-2026/useCallback_13-08-2026/Multiple_Callback'
import Toggle_App from '../../components_07-07-2026/Task14_13-08-2026/Custom_Hook_13-08-2026/useToggle_13-08-2026/Toggle_App'
import About_App from '../../components_07-07-2026/Task14_13-08-2026/Lazy_Loading_13-08-2026/About_Component_13-08-2026/About_App'
import Window_App from '../../components_07-07-2026/Task14_13-08-2026/Custom_Hook_13-08-2026/WindowSize_13-08-2026/Window_App'
import Button from '../../components_07-07-2026/Task14_13-08-2026/Lazy_Loading_13-08-2026/Button_13-08-2026/Button'
import Mini_App from '../../components_07-07-2026/Task14_13-08-2026/Mini_Practice_13-08-2026/Mini_App'

function Task14_Page() {
  return (
    <>
    <Parent/>
    <br/>
    <br/>
    <Prop_Parent/>
    <br/>
    <br/>
    <Change_Prop/>
    <br/>
    <br/>
    <hr/>
    <h2 className='font-bold'>useMemo</h2>
    <With_useMemo/>
    <br/>
    <br/>
    <Factorial/>
    <br/>
    <Object_Parent/>

    <br/>
    <br/>
    <Multiple_Dependencies/>
    <br/>
    <br/>
    <hr/>
    <h2 className='font-bold'>useCallback</h2>
    <UseCallback_Parent/>
    <br/>
    <br/>
    <With_useEffect/>
    <br/>
    <br/>
    <Multiple_Callback/>
    <br/>
    <br/>
    <hr/>
    <h2 className='font-bold'>custom hook</h2>
    <Toggle_App/>
    <br/>
    <br/>
    <Window_App/>
    <br/>
    <br/>
    <hr/>
    <h2 className='font-bold'>Lazy Loading</h2>
    <About_App/>
    <br/>
    <br/>
    <Button/>
    <br/>
    <br/>
    <hr/>
    <br/>
    <br/>
    <Mini_App/>

    </>
  )
}

export default Task14_Page