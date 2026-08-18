import React,{useEffect, useState} from 'react'

function Error_Handling() {
    const[users, setusers] = useState([]);
    const [loading,setLoading] = useState(true);
    const[error, setError] = useState("")

    useEffect(() =>{
        const fetchUsers  = async () =>{
            try{
                const response = await fetch("https://jsonplaceholder.typicode.com/users");

                if(! response.ok){
                    throw new Error("Failed to fetch users");
                }
                const data= await response.json();

                setusers(data);
            } catch(error){
                setError(error.message);
            }finally{
                setLoading(false);
            }
        };

        fetchUsers();
    },[]);

    if(loading){
        return<h2>Loading...</h2>
    }
    if(error){
        return<h2>{error}</h2>
    }
  return (
    <div>
        <h2>User List</h2>

        {users.map((user) =>(
            <p key={user.id}> {user.name}</p>
        ))}
    </div>
  );
}

export default Error_Handling




// Loading
//    ↓
// Success → Display data

// or

// Loading
//    ↓
// Error → Display error