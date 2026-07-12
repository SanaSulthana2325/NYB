function Add_Post() {

  const createPost = () => {

    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",

      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify({
        title: "Water",
        body: "Learn Importance of water",
        userId: 1
      })
    })

      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  return (
    <button onClick={createPost}>
      Create Post
    </button>
  );
}

export default Add_Post;