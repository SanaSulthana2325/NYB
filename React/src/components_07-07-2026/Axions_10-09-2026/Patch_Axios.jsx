import axios from "axios";

function Patch_Axios(){

const updateTitle=()=>{

axios.patch(

"https://jsonplaceholder.typicode.com/posts/1",

{

title:"Hello Universe!"

}

)

.then((response)=>{

console.log(response.data);

});

};

return(

<button onClick={updateTitle}>
Update Title
</button>

);

}

export default Patch_Axios;