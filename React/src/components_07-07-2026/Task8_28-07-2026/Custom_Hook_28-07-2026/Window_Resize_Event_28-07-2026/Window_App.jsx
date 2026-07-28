import useWindowSize from "./useWindowSize";


function Window_App(){


const width = useWindowSize();


return(

<h2>

{
 width < 768
 ?
 "Mobile Menu"
 :
 "Desktop Menu"
}

</h2>

);


}


export default Window_App;