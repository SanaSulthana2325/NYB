import { useEffect, useState } from "react";
import SearchBar from "../../components_07-07-2026/API_Integration_assignment_10-07-2026/SearchBar";
import UserList from "../../components_07-07-2026/API_Integration_assignment_10-07-2026/UserList";
import Loading from "../../components_07-07-2026/API_Integration_assignment_10-07-2026/Loading";
import Error from "../../components_07-07-2026/API_Integration_assignment_10-07-2026/Error";

import {

    getUsers,
    createUser,
    updateUser,
    deleteUser
} from "../../components_07-07-2026/API_Service_10-07-2026/API";

function API_Integration_Page() {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [search, setSearch] = useState("");

    useEffect(() => {

        loadUsers();

    }, []);

    async function loadUsers() {

        try {

            const data = await getUsers();

            setUsers(data);

        } catch (err) {

            setError(err.message);

        } finally {

            setLoading(false);

        }

    }

    async function addUser() {

        const newUser = {

            name: "Sana",
            email: "sana@gmail.com"

        };

        const user = await createUser(newUser);

        setUsers([...users, user]);

    }

    async function handleUpdate(id) {

        const updated = {

            name: "Updated User",
            email: "updated@gmail.com"

        };

        await updateUser(id, updated);

        setUsers(

            users.map(user =>

                user.id === id
                    ? { ...user, ...updated }
                    : user

            )

        );

    }

    async function handleDelete(id) {

        await deleteUser(id);

        setUsers(

            users.filter(user => user.id !== id)

        );

    }

    const filteredUsers = users.filter(user =>

        user.name.toLowerCase().includes(search.toLowerCase())

    );

    if (loading)
        return <Loading />

    if (error)
        return <Error message={error} />

    return (

        <div>

            <h1>React API Integration Assignment</h1>

            <SearchBar
                search={search}
                setSearch={setSearch}
            />

            <br />
            <br />

            <button onClick={addUser}>
                Add User
            </button>

            <UserList
                users={filteredUsers}
                onUpdate={handleUpdate}
                onDelete={handleDelete}
            />

        </div>

    );

}

export default API_Integration_Page;