import React from 'react'
import { AA, Ba, Ca, Cart, Cart1, Da, Ea, Fa, Ga, Ha, Parent } from '../../Component/Task2_06-10-2026/Task2_revision_06-10-2026/Task2'
import { Oa, Parent1 } from '../../Component/Task2_06-10-2026/Assigned_06-10-2026/Parent_Child'
import { Ia, Ja, Ka, La, Ma, Na } from '../../Component/Task2_06-10-2026/Assigned_06-10-2026/Different_Types_Of_Data_Prop'
import { Teacher } from '../../Component/Task2_06-10-2026/Assigned_06-10-2026/Child_Parent'
import { Pa } from '../../Component/Task2_06-10-2026/Assigned_06-10-2026/Component_Hierarchy'
import {Counter, Name, Toggle } from '../../Component/Task2_06-10-2026/Assigned_06-10-2026/UseState'
import { Qa } from '../../Component/Task2_06-10-2026/Assigned_06-10-2026/Conditional_rendering'

function Task2_Pages() {
  return (
    <>
    <h1 className="font-bold text-orange-500">Prop</h1>
    <AA/><br/>
    <hr/>

    <h1>State</h1>

    <Cart/> 
    <br/>
    <hr/>

    <h1>UseState</h1>
    <Cart1/>

    <hr/>
    <h1> parent child coponent</h1>

    <Ba/>
    <br/>
    <hr/>
    <Ca/>
    <hr/>
    <br/>
    <h1> Child to parent component</h1>

    <Parent/>

    <br/>
    <hr/>
    <h2>Component Hierarchy</h2>

    <Da/>
    <br/>
    <hr/>
    <h1> Passing Function as a Prop</h1>

    <Ea/>

    <hr/>
    <br/>
    <Fa/>
    <hr/>
    <br/>
    <h1> Conditional Rendering</h1>

    <Ga/>
    <br/>
    <hr/>
    <Ha/>

    <hr/>
    <hr/>
    <hr/>
    <h1 className='text-pink-500 text-4xl font-bold'> Assigned Task</h1>

    <h1> Prent-child</h1>

    <Parent1/>
    <br/>
    <Oa/>
<br/>
<hr/>
<h1> passing different type od data from parent-child</h1>
<h3> String</h3>
    <Ia/>
    <br/>
    <h3> Number</h3>
    <Ja/>
    <br/>
    <h3>Boolean</h3>
    <Ka/>

    <br/>
    <h3>Pass an Array</h3>

    <La/>
    <br/>
    <h3>Pass an Object</h3>
    <Ma/>

    <br/>
    <h3>Pass a Function</h3>
    <Na/>
    <hr/>
    <br/>
    <h1> Child-Parent</h1>
    <Teacher/>

    <hr/>
    <br/>
    <Pa/>
    <hr /><br/>

    <h1>useState</h1>
    <Counter/>
    <br/><br/>
    <Name/>
    <br/>
    <br/>
    <Toggle/>

    <hr/>
    <br/>
    <h1> Conditional rendering</h1>

    <Qa/>



    </>
  )
}

export default Task2_Pages