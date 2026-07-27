import React from 'react';
import UserCard from '../Card_27-07-2026/UserCard';

function Card_App() {

    const users = [
        {
            id:101,
            name:"Sana",
            email:"sana@12",
            role:"Developer"
        },
        {
            id:102,
            name:"Tasan",
            email:"Tasan@34",
            role:"Designer"
        }
    ];

    return (
        <div className="min-h-screen bg-gray-100 p-10">

            <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">
                User Details
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">

                {users.map((user)=>(
                    <UserCard 
                        key={user.id}
                        user={user}
                    />
                ))}

            </div>

        </div>
    );
}

export default Card_App;