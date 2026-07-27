import React from 'react'
import Child_Example from '../../components_07-07-2026/React.memo_27_07_2026/Example_27-07-2026/Child_Example'
import Parent_Example from '../../components_07-07-2026/React.memo_27_07_2026/Example_27-07-2026/Parent_Example'
import Parent_Prop from '../../components_07-07-2026/React.memo_27_07_2026/React_Memo_Prop/Parent_Prop'
import Parent_Change from '../../components_07-07-2026/React.memo_27_07_2026/React_Memo_Prop/Parent_Change'
import Practical_App from '../../components_07-07-2026/React.memo_27_07_2026/Practical_Exercises_27-07-2026/Practical_App'
import Without_useCallback from '../../components_07-07-2026/React.memo_27_07_2026/UseCallback_27-07-2026/Without_useCallback'
import With_useCallback from '../../components_07-07-2026/React.memo_27_07_2026/UseCallback_27-07-2026/With_useCallback'
import Card_App from '../../components_07-07-2026/React.memo_27_07_2026/Card_27-07-2026/Card_App'



function React_memo_Pages() {
  return (
    <>
    <Child_Example/>
    <Parent_Example/>
    <hr/>
    <h2 > with prop</h2>
    <br/>
    <Parent_Prop/>
    <hr/>
    <br/>
    <Parent_Change/>
    <hr/>
    <br/>
    <hr/>
    <Practical_App/>
    <br/>
    <hr/>
    <h2 className='font-bold'>useCallBack</h2>
    <Without_useCallback/>

    <hr/>
    <br/>
    <With_useCallback/>
    
    <hr/>
    <br/>
    <Card_App/>
    
    </>
  )
}

export default React_memo_Pages