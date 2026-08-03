import {Link} from "react-router-dom";


function Navbar(){

return(

<nav className="bg-gray-800 !p-5">


<div className="flex gap-6 justify-center">


<Link 
className="text-white hover:text-yellow-300"
to="/"
>
Home
</Link>


<Link 
className="text-white hover:text-yellow-300"
to="/about1"
>
About
</Link>


<Link 
className="text-white hover:text-yellow-300"
to="/service"
>
Services
</Link>


<Link 
className="text-white hover:text-yellow-300"
to="/contact1"
>
Contact
</Link>


</div>


</nav>

)

}

export default Navbar;