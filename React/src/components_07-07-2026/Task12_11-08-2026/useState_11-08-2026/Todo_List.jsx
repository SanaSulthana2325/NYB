import React, { useState } from "react";

function Todo_List() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    setTasks([...tasks, task]);
    setTask("");
  };

  return (
    <div>
      <input
        value={task}
        onChange={(e) => setTask(e.target.value)}
      className="border border-green-900"/>

      <button onClick={addTask}
      className="bg-pink-400">
        Add
      </button>

      <ul>
        {tasks.map((t, index) => (
          <li key={index}>{t}</li>
        ))}
      </ul>
    </div>
  );
}

export default Todo_List;