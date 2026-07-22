import { useEffect } from "react";

function API() {

  useEffect(() => {

    console.log("Fetching Data...");

  }, []);

  return (

    <h2>User List</h2>

  );
}

export default API;