import { useState } from "react";

function SearchEmployee({employees}){

    const [search,setSearch]=useState("");

    const filteredEmployees = employees.filter((emp)=>

        emp.title.toLowerCase().includes(search.toLowerCase())

    );

    return(

        <div>

            <input

                type="text"

                placeholder="Search"

                value={search}

                onChange={(e)=>setSearch(e.target.value)}

            />

            {

                filteredEmployees.map((emp)=>(

                    <p key={emp.id}>
                        {emp.title}
                    </p>

                ))

            }

        </div>

    );

}

export default SearchEmployee;