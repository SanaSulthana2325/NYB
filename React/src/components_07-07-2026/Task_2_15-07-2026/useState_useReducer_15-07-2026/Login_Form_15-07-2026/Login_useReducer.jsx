import { useReducer } from "react";

const initialState = {
    username: "",
    password: ""
};

function reducer(state, action) {

    switch (action.type) {

        case "username":
            return {
                ...state,
                username: action.payload
            };

        case "password":
            return {
                ...state,
                password: action.payload
            };

        default:
            return state;
    }
}

function Login_useReducer() {

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <>
            <input
                placeholder="Username"
                value={state.username}
                onChange={(e) =>
                    dispatch({
                        type: "username",
                        payload: e.target.value
                    })
                }
            />

            <br /><br />

            <input
                type="password"
                placeholder="Password"
                value={state.password}
                onChange={(e) =>
                    dispatch({
                        type: "password",
                        payload: e.target.value
                    })
                }
            />

            <h2>Username: {state.username}</h2>
            <h2>Password: {state.password}</h2>
        </>
    );
}

export default Login_useReducer;