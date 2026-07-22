import { useState } from "react";

function Login1(){

    const [isLoggedIn, setIsLoggedIn] = useState(false);


    return(
        <div>

            <button
                onClick={() => setIsLoggedIn(!isLoggedIn)}
            >
                {
                    isLoggedIn ? "Logout" : "Login"
                }
            </button>


            <h3>
                {
                    isLoggedIn 
                    ? "Welcome User"
                    : "Please Login"
                }
            </h3>

        </div>
    );

}

export default Login1;