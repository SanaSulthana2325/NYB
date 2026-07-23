import { useEffect, useState } from "react";
import UserCard from "../Mini_Practice_23-07-2026/UserCard";
import withLoading1 from "../Mini_Practice_23-07-2026/withLoading1";

const UserWithLoading = withLoading1(UserCard);

function LoadingSpinnerApp() {

  const [loading, setLoading] = useState(true);

  const [user, setUser] = useState({});

  useEffect(() => {

    setTimeout(() => {

      setUser({
        name: "Sana Sulthana",
        email: "sana@gmail.com",
        city: "Hyderabad",
      });

      setLoading(false);

    }, 2000);

  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-pink-200">

      <UserWithLoading
        loading={loading}
        user={user}
      />

    </div>
  );
}

export default LoadingSpinnerApp;