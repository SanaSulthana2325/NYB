import { useEffect, useState } from "react";


function Promise_Chaining() {

  const [users, setUsers] = useState([]);

  useEffect(() => {

    fetch("https://jsonplaceholder.typicode.com/users")

      .then((response) => {

        return response.json();

      })

      .then((data) => {

        setUsers(data);

      })

      .catch((error) => {

        console.log(error);

      });

  }, []);

  return (

    <div>

      {users.map((user)=>(

        <h3 key={user.id}>
          {user.name}
        </h3>

      ))}

    </div>

  );

}

export default Promise_Chaining;



// Promise Chaining

// Promise Chaining means connecting multiple asynchronous operations together using multiple .then() methods, where the output of one step becomes the input for the next step.

// It allows you to perform tasks one after another in sequence.

// fetch()
//    ↓
// .then()
//    ↓
// response.json()
//    ↓
// .then()
//    ↓
// setUsers()
//    ↓
// .catch()