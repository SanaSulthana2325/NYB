import React from 'react'
import axios from "axios"

function Axios_Put() {
    const updateStudent = async () =>{
        try{
            const response = await axios.put("https://jsonplaceholder.typicode.com/posts/10",
                {
                    name:"Sana",
                    hobbies:"listening to music"
                }
            );
            console.log(response.data);
        }catch(error){
            console.log(error);
        }
    };
  return (
    <div>
        <h2>Update Student</h2>
        <p>Name:Sana</p>
        <p>Hobbies:Listening To Music</p>

        <button onClick={updateStudent}
        className='bg-green-700'> Update Student</button>
    </div>
  );
}

export default Axios_Put