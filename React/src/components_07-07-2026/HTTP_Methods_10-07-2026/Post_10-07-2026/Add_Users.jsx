import {useState} from 'react'

function Add_Users() {
    const[name, setName] = useState("");
    const addUser = () => {
        fetch("https://jsonplaceholder.typicode.com/users", {
            method : "POST",
            headers : {
                "Content-Type": "application/json"
            },
            body : JSON.stringify({
                name : name
            })
    })
    .then((response) => response.json())
    .then((data) => console.log(data));
    };
  return (
    <>
    <input
    type="text"
    placeholder="Enter Name"
    onChange={(e) => setName(e.target.value)}/>

    <button onClick={addUser}>Add User</button>
    </>
  )
}

export default Add_Users