function Delete() {

  const deletePost = () => {

    fetch("https://jsonplaceholder.typicode.com/posts/1", {

      method: "DELETE"

    })

      .then(() => {
        alert("Post Deleted");
      });

  };

  return (
    <button onClick={deletePost}>
      Delete Post
    </button>
  );
}

export default Delete;