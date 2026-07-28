import {useState,useEffect} from "react";


function useFetch(){

 const [loading,setLoading]=useState(true);


 useEffect(()=>{

   setTimeout(()=>{

    setLoading(false);

   },2000)


 },[])


 return loading;

}

export default useFetch;