import React, { useState } from "react";
import Counter from "./Counter";
import UserProfile from "./UserProfile";

function Mini_App() {
  const [count, setCount] = useState(0);

  const user = {
    name: "Lulu",
    email: "lulu@example.com",
  };

  const increment = () => {
    setCount(count + 1);
  };

  const updateProfile = () => {
    alert("Profile updated!");
  };

  console.log("App rendered");

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="mx-auto max-w-2xl">
        <h1 className="mb-2 text-3xl font-bold text-gray-800">
          React Re-render Demo
        </h1>

        <p className="mb-6 text-gray-600">
          Open the browser console and click the Increment button.
        </p>

        <Counter
          count={count}
          onIncrement={increment}
        />

        <UserProfile
          user={user}
          onUpdate={updateProfile}
        />
      </div>
    </div>
  );
}

export default Mini_App;