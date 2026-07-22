import UserCard from "./UserCard";

function UserList({ users, onUpdate, onDelete }) {

    return (

        <>
            {
                users.map(user => (

                    <UserCard
                        key={user.id}
                        user={user}
                        onUpdate={onUpdate}
                        onDelete={onDelete}
                    />

                ))
            }
        </>

    );

}

export default UserList;