import axios from "axios";

function Delete_Axios(){

const deletePost=()=>{

axios.delete(

"https://jsonplaceholder.typicode.com/posts/1"

)

.then(()=>{

alert("Post Deleted");

});

};

return(

<button onClick={deletePost}>
Delete Post
</button>

);

}

export default Delete_Axios;