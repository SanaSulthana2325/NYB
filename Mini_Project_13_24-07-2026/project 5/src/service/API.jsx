import axios from "axios";

export const getStudents = () => {
  return axios.get("https://jsonplaceholder.typicode.com/users");
};