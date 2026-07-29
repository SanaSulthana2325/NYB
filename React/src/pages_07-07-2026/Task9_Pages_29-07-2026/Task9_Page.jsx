import React from 'react'
import Parent_App from '../../components_07-07-2026/Task9_29-07-2026/Pure_Componenet_29-07-2026/Normal_Pure_Component_29-07-2026/Parent_App'
import Product_App from '../../components_07-07-2026/Task9_29-07-2026/Pure_Componenet_29-07-2026/E-Commerce_example_29-07-2026/Product_App'
import Pure_State from '../../components_07-07-2026/Task9_29-07-2026/Pure_Componenet_29-07-2026/Pure_State'
import Array_App from '../../components_07-07-2026/Task9_29-07-2026/Pure_Componenet_29-07-2026/Pure_Array/Array_App'
import Practice from '../../components_07-07-2026/Task9_29-07-2026/Pure_Componenet_29-07-2026/Practice'
import Pure_Props_State from '../../components_07-07-2026/Task9_29-07-2026/Pure_Componenet_29-07-2026/Pure_Props_State'
import Example_App from '../../components_07-07-2026/Task9_29-07-2026/React.Memo_29-07-2026/Example_29-07-2026/Example_App'
import Example from './../../components_07-07-2026/Task7_24-07-2026/API_Integration_24-07-2026/Example';
import With_ReactMemo_App from '../../components_07-07-2026/Task9_29-07-2026/React.Memo_29-07-2026/Example_29-07-2026/With_ReactMemo_App'
import Parent_Prop from '../../components_07-07-2026/Task9_29-07-2026/React.Memo_29-07-2026/ReactMemo_Prop_29-07-2026/Parent_Prop'
import Without_useMemo from '../../components_07-07-2026/Task9_29-07-2026/useMemo_29-07-2026/Without_useMemo'
import With_useMemo from '../../components_07-07-2026/Task9_29-07-2026/useMemo_29-07-2026/With_useMemo'
import Filtering_Products from '../../components_07-07-2026/Task9_29-07-2026/useMemo_29-07-2026/Filtering_Products'
import Sorting from '../../components_07-07-2026/Task9_29-07-2026/useMemo_29-07-2026/Sorting'
import With_Object from '../../components_07-07-2026/Task9_29-07-2026/useMemo_29-07-2026/With_Object'
import Search_App from '../../components_07-07-2026/Task9_29-07-2026/useCallback_29-07-2026/Search_Component_29-07-2026/Search_App'

function Task9_Page() {
  return (
    <>
     <Parent_App/>
    <br/>
    <hr/>
    <br/>
    <Product_App/>

    <br/>
    <Pure_State/>
    <br/>
    <hr/>
    <Array_App/>

    <hr/>
    <h2 className='font-bold'>Example</h2>
    <Example_App/> 
    <hr/>
    <br/>
    <br/>
    <With_ReactMemo_App/>
    <hr/>
    <br/>
    <h2 className='font-bold'>React memo using prop</h2>
    <Parent_Prop/>

    <hr/>
    <Practice name="AAA"/> 


    <hr/>
    <Pure_Props_State/>

    <hr/>
    <br/>
    <hr/>
    <h2 className='font-bold'>without useMemo</h2>
    <br/>
    <Without_useMemo/>
    <hr/>
    <br/>
    <h2 className='font-bold'> With useMemo</h2>
    <br/>
    <With_useMemo/>
    <hr/>
    <br/>
    <Filtering_Products/>
    <hr/>
    <br/>
    <Sorting/>
    <hr/>
    <br/>
    <With_Object/>
    <br/>
    <hr/>
    <br/>
    <h2 className='font-bold'>useCallback</h2>
    <Search_App/>
    </>
  )
}

export default Task9_Page