import React from 'react'

import axios from "axios";

function Axios_Post() {
    const addStudent= async() =>{
        try{
            const response = await axios.post("https://jsonplaceholder.typicode.com/posts",
                {
                    name:"sana",
                    hobbies:"Cooking"
                }
            );
            console.log(response.data);
        } catch(error){
            console.log(error);
        }
    };
  return (
    <div>
        <h2>Add Student</h2>

        <p>Name: Ali</p>
        <p>Hobbies: badminton </p>

        <button onClick={addStudent}
        className='bg-pink-600 px-2 py-2 '>Add Student</button>
    </div>
  );
}

export default Axios_Post