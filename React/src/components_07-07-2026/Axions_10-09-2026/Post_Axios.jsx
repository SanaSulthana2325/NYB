import axios from "axios";

function Post_Axios() {

  const createPost = () => {

    axios.post(

      "https://jsonplaceholder.typicode.com/posts",

      {

        title:"React",
        body:"Learning Axios",
        userId:1

      }

    )

    .then((response)=>{

      console.log(response.data);

    });

  };

  return(

    <button onClick={createPost}>
      Create Post
    </button>

  );

}

export default Post_Axios;