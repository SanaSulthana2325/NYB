function Put_Example() {


  const updatePost = () => {

    fetch("https://jsonplaceholder.typicode.com/posts/1", {

      method: "PUT",

      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify({

        id: 1,
        title: "Air",
        body: "Effects of Air Pollution",
        userId: 1

      })

    })

      .then((response) => response.json())
      .then((data) => console.log(data));

  };

  return (
    <button onClick={updatePost}>
      Update Post
    </button>
  );
}

export default Put_Example;