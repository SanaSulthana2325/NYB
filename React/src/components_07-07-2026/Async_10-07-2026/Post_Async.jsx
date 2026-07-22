
function Post_Async() {

  const createPost = async () => {

    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts",

      {

        method: "POST",

        headers: {

          "Content-Type":"application/json"

        },

        body: JSON.stringify({

          title:"Family",

          body:"About Your Family",

          userId:1

        })

      }

    );

    const data = await response.json();

    console.log(data);

  };

  return (

    <button onClick={createPost}>
      Create Post
    </button>

  );

}

export default Post_Async;