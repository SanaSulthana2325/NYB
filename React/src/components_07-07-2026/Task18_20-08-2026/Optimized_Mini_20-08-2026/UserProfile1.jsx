import React from "react";

const UserProfile1 = React.memo(function UserProfile({
  user,
  onUpdate,
}) {
  console.log("UserProfile rendered");

  return (
    <div className="mt-6 rounded-xl bg-white p-6 shadow-md">
      <h2 className="mb-3 text-xl font-bold text-gray-800">
        User Profile
      </h2>

      <p className="text-gray-600">
        Name: <span className="font-semibold">{user.name}</span>
      </p>

      <p className="text-gray-600">
        Email: <span className="font-semibold">{user.email}</span>
      </p>

      <button
        onClick={onUpdate}
        className="mt-4 rounded-lg bg-green-500 px-4 py-2 text-white hover:bg-green-600"
      >
        Update Profile
      </button>
    </div>
  );
});

export default UserProfile1;