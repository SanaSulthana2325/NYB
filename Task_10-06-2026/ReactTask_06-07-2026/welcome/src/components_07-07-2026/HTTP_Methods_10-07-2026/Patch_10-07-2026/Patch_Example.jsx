function Patch_Example() {

  const updateTitle = () => {

    fetch("https://jsonplaceholder.typicode.com/posts/1", {

      method: "PATCH",

      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify({

        title: "New React Title"

      })

    })

      .then((response) => response.json())
      .then((data) => console.log(data));

  };

  return (
    <button onClick={updateTitle}>
      Update Title
    </button>
  );
}


fetch("https://jsonplaceholder.typicode.com/users/1", {

  method: "PATCH",

  headers: {
    "Content-Type": "application/json"
  },

  body: JSON.stringify({

    body: "sana is a good girl"

  })

})
.then((response) => response.json())
.then((data) => console.log(data));

export default Patch_Example;