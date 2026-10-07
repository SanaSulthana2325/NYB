import React from 'react'
import { Ab, Bb, Bc, Bd, Be, Bf, Bg, Bh, Chips, Fruits, Hobbies, Login, Pro, Register } from '../../Component/Task3_07-10-2026/Task3/Task3'
import { Bi, Bj, Bk, Bl, Bm, Bn, Bo, Count } from '../../Component/Task3_07-10-2026/Assigned_Task_07-10-2026/Assign'

function Task3_Pages() {
  return (
    <>
    <h1> event Handling</h1>
    <Ab/>

    <hr/>
    <br/>
    <h1> form</h1>
    <Login/>
    <hr/>
    <br/>
    <h1>Controlled Component</h1>

    <Register/>
    <br/>
    <hr/>
    <br/>
    <h1>Input Handling</h1>

    <Bb/>

    <br/>
    <hr/>
    <h1>Dynamic forms</h1>

    <Hobbies/>
    <hr/>
    <br/>
    <h1>List Rendering</h1>
    <Fruits/>
    <hr/>
    <br/>
    <h1>Map</h1>
    <Chips/>
    <hr/>
    <br/>
    <h1>Key</h1>
    <Bc/>

    <hr/>
    <br/>
    <h1>Conditional Rendering</h1>

    <Bd/>

    <hr/>
    <br/>
    <h1> useEffect</h1>
    <Pro/>
    <hr/>
    <br/>
    <h1> No dependency</h1>
    <Be/>

    <hr/>
    <br/>
    <h2> Empty dependency</h2>
    <Bf/>
    <hr/>
    <br/>
    <h2>Dependency</h2>
    <Bg/>

    <hr/>
    <br/>
    <h1> Component LifeCycle</h1>
    <Bh/>
    <hr/>
    <br/>
    <h1>Assigned Task</h1>
    <Bi/>

    <hr/>
    <br/>
    <h1>Create controlled form components.</h1>
    <Bj/>
    <hr/>
    <br/>
    <h1>Render arrays using map().</h1>

    <Bk/>
    <hr/>
    <br/>
    <h1>with keys</h1>
    <Bl/>
    <hr/>
    <br/>
    <h1>Implement conditional UI rendering.</h1>

    <Bm/>
    <hr/>
    <br/>
    <h1>useEffect</h1>
    <Bn/>
    <hr/>
    <br/>
    <h1> uaseState and useEffect</h1>
    <Count/>
    <hr/>
    <br/>
    <Bo/>







    </>
  )
}

export default Task3_Pages



// | Method      | Example                      | Best for            |
// | ----------- | ---------------------------- | ------------------- |
// | `if...else` | `if (isLoggedIn)`            | Large/different UI  |
// | Ternary     | `condition ? A : B`          | Two alternatives    |
// | `&&`        | `condition && <Component />` | Show only when true |

