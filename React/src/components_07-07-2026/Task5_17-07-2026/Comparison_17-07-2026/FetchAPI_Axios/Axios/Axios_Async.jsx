import axios from "axios";
import { useEffect } from "react";


function Axios_Async() {

  useEffect(() => {

    async function getUsers(){

      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );

      console.log(response.data);

    }

    getUsers();

  }, []);

  return <h2>Axios Example</h2>;

}

export default Axios_Async;