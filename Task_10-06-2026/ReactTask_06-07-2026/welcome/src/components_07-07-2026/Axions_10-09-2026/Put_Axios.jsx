import axios from "axios";

function Put_Axios(){

const updatePost=()=>{

axios.put(

"https://jsonplaceholder.typicode.com/posts/1",

{

id:1,

title:"Tasan",

body:"Hello World",

userId:1

}

)

.then((response)=>{

console.log(response.data);

});

};

return(

<button onClick={updatePost}>
Update Post
</button>

);

}

export default Put_Axios;