
import {
  createContext,
  useCallback,
  useEffect,
  useReducer,
} from "react";

export const UserContext = createContext(null);

const API = "https://jsonplaceholder.typicode.com/users";

const initialState = {
  users: [],
  loading: true,
  error: "",
};

function userReducer(state, action) {
  switch (action.type) {
    case "SET_USERS":
      return { ...state, users: action.payload, loading: false, error: "" };

    case "ADD_USER":
      return { ...state, users: [action.payload, ...state.users] };

    case "UPDATE_USER":
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.payload.id ? action.payload : user
        ),
      };

    case "DELETE_USER":
      return {
        ...state,
        users: state.users.filter(
          (user) => user.id !== action.payload
        ),
      };

    case "SET_LOADING":
      return { ...state, loading: action.payload };

    case "SET_ERROR":
      return { ...state, error: action.payload, loading: false };

    case "RESET":
      return initialState;

    default:
      return state;
  }
}

export function UserProvider({ children }) {
  const [state, dispatch] = useReducer(userReducer, initialState);

  const loadUsers = useCallback(async () => {
    dispatch({ type: "SET_LOADING", payload: true });

    try {
      const response = await fetch(API);

      if (!response.ok) {
        throw new Error("Unable to load users.");
      }

      const data = await response.json();

      const users = data.map((user) => ({
        ...user,
        status: user.id % 2 === 0 ? "Inactive" : "Active",
      }));

      dispatch({ type: "SET_USERS", payload: users });
    } catch (error) {
      dispatch({
        type: "SET_ERROR",
        payload: error.message || "Something went wrong.",
      });
    }
  }, []);

  useEffect(() => {
    loadUsers();
  }, [loadUsers]);

  async function addUser(formData) {
    const response = await fetch(API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (!response.ok) throw new Error("Could not add user.");

    const data = await response.json();

    const newUser = {
      ...formData,
      ...data,
      id: Date.now(),
    };

    dispatch({ type: "ADD_USER", payload: newUser });
  }

  async function updateUser(id, formData) {
    const response = await fetch(`${API}/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (!response.ok) throw new Error("Could not update user.");

    await response.json();

    const existingUser = state.users.find((user) => user.id === id);

    dispatch({
      type: "UPDATE_USER",
      payload: { ...existingUser, ...formData, id },
    });
  }

  async function deleteUser(id) {
    const response = await fetch(`${API}/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) throw new Error("Could not delete user.");

    dispatch({ type: "DELETE_USER", payload: id });
  }

  return (
    <UserContext.Provider
      value={{
        ...state,
        addUser,
        updateUser,
        deleteUser,
        loadUsers,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
