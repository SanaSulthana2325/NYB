import React, {useState, useMemo,useCallback} from "react";

import Counter from "./Counter1";
import UserProfile from "./UserProfile1";

function Optimized_App() {
  const [count, setCount] = useState(0);

  // useMemo keeps the same object reference
  const user = useMemo(() => {
    return {
      name: "Lusi",
      email: "lusi@example.com",
    };
  }, []);

  // useCallback keeps the same function reference
  const increment = useCallback(() => {
    setCount((previousCount) => previousCount + 1);
  }, []);

  // useCallback keeps the same function reference
  const updateProfile = useCallback(() => {
    alert("Profile updated!");
  }, []);

  console.log("App rendered");

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="mx-auto max-w-2xl">
        <h1 className="mb-2 text-3xl font-bold text-gray-800">
          React Re-render Optimization
        </h1>

        <p className="mb-6 text-gray-600">
          Open the browser console and click Increment.
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

export default Optimized_App;