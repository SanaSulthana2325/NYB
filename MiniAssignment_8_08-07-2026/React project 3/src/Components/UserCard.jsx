function UserCard({user}){

    return(
        <>
            <h4>{user.name}</h4>
            <p>Age : {user.age}</p>
        </>
    )
}

export default UserCard;