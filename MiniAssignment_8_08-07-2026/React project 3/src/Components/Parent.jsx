import { useState } from "react";
import ChildA from "./ChildA";
import ChildB from "./ChildB";
import UserCard from "./UserCard";
import ProductList from "./ProductList";

function Parent() {

  const [message, setMessage] = useState("Hello Child");

  const [reply, setReply] = useState("");

  const users = [
    {
      id:1,
      name:"Rahul",
      age:23
    },
    {
      id:2,
      name:"Sneha",
      age:21
    },
    {
      id:3,
      name:"Amit",
      age:24
    }
  ];

  const products=[
    {
      id:1,
      name:"Laptop",
      price:55000
    },
    {
      id:2,
      name:"Phone",
      price:25000
    },
    {
      id:3,
      name:"Watch",
      price:3000
    }
  ];

  return (
    <>
      <h2>Parent Component</h2>

      <ChildA
        message={message}
        sendData={setReply}
      />

      <hr />

      <ChildB
        childMessage={reply}
      />

      <hr />

      <h2>Users</h2>

      {
        users.map((user)=>(
          <UserCard
            key={user.id}
            user={user}
          />
        ))
      }

      <hr />

      <ProductList products={products}/>

    </>
  );
}

export default Parent;