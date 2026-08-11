import React, { useEffect, useState } from "react";

function Search_Users() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search user"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />

      {filteredUsers.map(user => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
}

export default Search_Users;