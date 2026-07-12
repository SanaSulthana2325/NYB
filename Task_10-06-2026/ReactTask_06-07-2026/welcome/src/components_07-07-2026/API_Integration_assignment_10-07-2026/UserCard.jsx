function UserCard({ user, onUpdate, onDelete }) {

    return (

        <div
            style={{
                border: "1px solid gray",
                margin: "10px",
                padding: "10px"
            }}
        >

            <h3>{user.name}</h3>

            <p>{user.email}</p>

            <button onClick={() => onUpdate(user.id)}>
                Update
            </button>

            <button onClick={() => onDelete(user.id)}>
                Delete
            </button>

        </div>

    );

}

export default UserCard;