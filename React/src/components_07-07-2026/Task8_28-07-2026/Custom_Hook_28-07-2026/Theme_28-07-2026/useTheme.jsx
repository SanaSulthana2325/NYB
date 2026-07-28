import { useState } from "react";


function useTheme(){

const [dark,setDark]=useState(false);


const toggleTheme=()=>{

 setDark(!dark);

};


return {
 dark,
 toggleTheme
};

}


export default useTheme;