import React,{useEffect, useState} from 'react'

function Loading_State() {
    const[users, setUsers] = useState([]);
    const [loading,setLoading] = useState(true);


    useEffect(()=>{
        const fetchUsers = async () =>{
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/users");

                const data = await response.json();

                setUsers(data);
            } catch(error){
                console.log(error);
            } finally{
                setLoading(false);
            }
        };

        fetchUsers();
    },[]);

    if (loading){
        return<h2>Loading....</h2>;
    }
  return (
    <div>
        <h2>Users</h2>

        {users.map((user) =>(
            <p key={user.id}> {user.name}</p>
        ))}
    </div>
  );
}

export default Loading_State