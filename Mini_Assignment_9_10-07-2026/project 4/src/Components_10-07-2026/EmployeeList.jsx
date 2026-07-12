import { useEffect, useState } from "react";
import { getPosts } from "../Services/FetchApi";

function EmployeeList() {

    const [employees, setEmployees] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {

        const fetchEmployees = async () => {

            try {

                const data = await getPosts();
                setEmployees(data);

            } catch (err) {

                setError(err.message);

            } finally {

                setLoading(false);
            }
        };

        fetchEmployees();

    }, []);

    if (loading) return <h2>Loading...</h2>;

    if (error) return <h2>{error}</h2>;

    return (

        <div>

            <h2>Employee List</h2>

            {

                employees.slice(0,10).map((emp)=>(

                    <div key={emp.id}>

                        <h4>{emp.title}</h4>

                    </div>

                ))

            }

        </div>

    );

}

export default EmployeeList;