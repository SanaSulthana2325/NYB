import React from 'react';

function UserCard({user}) {

    return (
        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition duration-300">

            <h2 className="text-2xl font-bold text-gray-800 mb-3">
                {user.name}
            </h2>

            <p className="text-gray-600 mb-2">
                <span className="font-semibold">Email:</span> {user.email}
            </p>

            <p className="text-gray-600">
                <span className="font-semibold">Role:</span> 
                <span className="ml-2 bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                    {user.role}
                </span>
            </p>

        </div>
    );
}

export default UserCard;