import {useState} from 'react'
import Popup from './Popup';

function Popup_App() {
    const[open,setOpen] = useState(false);
  return (
    <div>
        <h1> Welcome Universe!</h1>

        <button onClick={()=> setOpen(true)}
            className='bg-pink-500'> Open Pupup</button>
        
        {open && (
            <Popup onClose={()=> setOpen(false)}/>
        )}
    </div>
  );
}

export default Popup_App