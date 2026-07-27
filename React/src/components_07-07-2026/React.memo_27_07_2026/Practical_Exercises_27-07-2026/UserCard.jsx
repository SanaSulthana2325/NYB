import React from "react";

function UserCard({ user }) {
  console.log(user.name, "Rendered");

  return (
    <div className="bg-white rounded-xl shadow-lg p-5 hover:scale-105 duration-300">

      <h2 className="text-xl font-bold text-blue-600">
        {user.name}
      </h2>

      <p className="text-gray-600">
        {user.email}
      </p>

      <p className="text-gray-500">
        {user.phone}
      </p>

      <p className="text-green-600 font-semibold">
        {user.company.name}
      </p>

    </div>
  );
}

export default React.memo(UserCard);