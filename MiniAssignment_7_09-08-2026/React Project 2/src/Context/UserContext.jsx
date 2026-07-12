import { createContext, useState } from "react";

export const UserContext = createContext();

function UserProvider({ children }) {

    const [user] = useState({
        name: "Sana",
        course: "React JS",
        company: "OpenAI Training"
    });

    return (

        <UserContext.Provider value={user}>

            {children}

        </UserContext.Provider>

    );

}

export default UserProvider;