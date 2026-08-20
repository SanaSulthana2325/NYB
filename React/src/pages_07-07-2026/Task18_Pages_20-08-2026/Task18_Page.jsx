import React from 'react'
import Basic from '../../components_07-07-2026/Task18_20-08-2026/React.Memo_20-08-2026/Basic'
import Changing_Prop from '../../components_07-07-2026/Task18_20-08-2026/React.Memo_20-08-2026/Changing_Prop'
import With_Counter from '../../components_07-07-2026/Task18_20-08-2026/React.Memo_20-08-2026/With_Counter'
import With_List from '../../components_07-07-2026/Task18_20-08-2026/React.Memo_20-08-2026/With_List'
import With_useMemo from '../../components_07-07-2026/Task18_20-08-2026/React.Memo_20-08-2026/With_useMemo'
import Basic_useMemo from '../../components_07-07-2026/Task18_20-08-2026/useMemo_20-08-2026/Basic_useMemo'
import With_Filtering from '../../components_07-07-2026/Task18_20-08-2026/useMemo_20-08-2026/With_Filtering'
import With_Sorting from '../../components_07-07-2026/Task18_20-08-2026/useMemo_20-08-2026/With_Sorting'
import Simple_useCallback from '../../components_07-07-2026/Task18_20-08-2026/useCallback_20-08-2026/Simple_useCallback'
import With_Search from '../../components_07-07-2026/Task18_20-08-2026/useCallback_20-08-2026/With_Search'
import Basic_Loading from '../../components_07-07-2026/Task18_20-08-2026/Lazy_Loading_20-08-2026/Basic_Loading'
import Dashboard from '../../components_07-07-2026/Task18_20-08-2026/Lazy_Loading_20-08-2026/Sales_20-08-2026/Dashboard'
import Button from '../../components_07-07-2026/Task18_20-08-2026/Lazy_Loading_20-08-2026/With_Button/Button'
import User_App from '../../components_07-07-2026/Task18_20-08-2026/Code_Splitting_20-08-2026/User_Reports_20-08-2026/User_App'
import Mini_App from '../../components_07-07-2026/Task18_20-08-2026/Mini_Practice_20-08-2026/Mini_App'
import Optimized_App from '../../components_07-07-2026/Task18_20-08-2026/Optimized_Mini_20-08-2026/Optimized_App'

function Task18_Page() {
  return (
    <>
    <Basic/>
    <hr/>
    <br/>
    <Changing_Prop/>
    <hr/>
    <br/>
    <With_Counter/>
    <hr/>
    <br/>
    <With_List/>
    <hr/>
    <br/>
    <With_useMemo/>
    <hr/>
    <br/>
    <h2 className='font-bold'>UseMemo</h2>
    <Basic_useMemo/>
    <hr/>
    <br/>
    <With_Filtering/>
    <hr/>
    <br/>
    <With_Sorting/>
    <hr/>
    <br/>
    <h2 className='font-bold'> USECALLBACK</h2>
    <Simple_useCallback/>
    <hr/>
    <br/>
    <With_Search/>
    <hr/>
    <br/>
    <h2 className='font-bold'> LAZY LOADING</h2>
    <Basic_Loading/>
    <br/>
    <hr/>
    <br/>
    <Dashboard/>
    <hr/>
    <br/>
    <Button/>
    <hr/>
    <h2 className='font-bold'> Code Splitting</h2>
    <br/>
    <User_App/>
    <br/>
    <hr/>
    <br/>
    <hr/>
    <br/>
    <Mini_App/>
    <br/>
    <br/>
    <hr/>
    <br/>
    <hr/>
    <h2 className='font-bold'> Optimized </h2>
    <Optimized_App/>

    </>
  )
}

export default Task18_Page