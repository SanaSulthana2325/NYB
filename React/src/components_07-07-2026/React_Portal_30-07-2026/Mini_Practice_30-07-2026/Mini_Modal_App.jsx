import { useState } from "react";
import Mini_Modal from "./Mini_Modal";


function Mini_Modal_App() {
const [open, setOpen] = useState(false);

return ( <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center"> 
<h1 className="text-3xl font-bold mb-6">
hii Hello world this is the world of Genz </h1>


  <button
    onClick={() => setOpen(true)}
    className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
  >
    Open Login Modal
  </button>

  {open && <Mini_Modal onClose={() => setOpen(false)} />}
</div>

);
}

export default Mini_Modal_App;
