import React from "react";
import axios from "axios";

function Axios_Delete() {
  const deleteStudent = async () => {
    try {
      const response = await axios.delete(
        "https://jsonplaceholder.typicode.com/posts/10"
      );

      console.log("Deleted successfully");
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Delete Student</h2>

      <p>Student ID: 10</p>

      <button onClick={deleteStudent}
      className="bg-orange-600">
        Delete Student
      </button>
    </div>
  );
}

export default Axios_Delete;