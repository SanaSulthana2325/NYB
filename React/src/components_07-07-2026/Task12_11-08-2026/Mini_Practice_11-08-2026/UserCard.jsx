function UserCard({ user }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">

      <div className="w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto">
        {user.name.charAt(0)}
      </div>

      <h2 className="text-xl font-bold text-gray-800 text-center mt-4">
        {user.name}
      </h2>

      <p className="text-gray-500 text-center">
        @{user.username}
      </p>

      <div className="mt-5 space-y-2 text-gray-600">

        <p>
          <span className="font-semibold">Email:</span>{" "}
          {user.email}
        </p>

        <p>
          <span className="font-semibold">Phone:</span>{" "}
          {user.phone}
        </p>

        <p>
          <span className="font-semibold">City:</span>{" "}
          {user.address.city}
        </p>

      </div>

    </div>
  );
}

export default UserCard;