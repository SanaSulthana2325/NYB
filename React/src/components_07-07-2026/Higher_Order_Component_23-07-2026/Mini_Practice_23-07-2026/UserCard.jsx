function UserCard({ user }) {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 w-80 text-center">
      <h2 className="text-2xl font-bold text-blue-700">
        {user.name}
      </h2>

      <p className="text-gray-600 mt-2">
        {user.email}
      </p>

      <p className="text-gray-500">
        {user.city}
      </p>
    </div>
  );
}

export default UserCard;