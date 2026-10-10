
import { useState, useEffect } from "react";

const API_URL = "https://jsonplaceholder.typicode.com/todos";

// Reusable API function
async function apiRequest(url, method = "GET", body = null) {
  const options = {
    method,
    headers: { "Content-Type": "application/json" },
  };

  if (body !== null) {
    options.body = JSON.stringify(body);
  }

  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error(`API Error: ${response.status}`);
  }

  if (response.status === 204) return null;

  const text = await response.text();
  return text ? JSON.parse(text) : null;
}

// API functions
const taskAPI = {
  getTasks: () => apiRequest(`${API_URL}?_limit=10`),

  createTask: (title) =>
    apiRequest(API_URL, "POST", {
      title,
      completed: false,
      userId: 1,
    }),

  replaceTask: (task) =>
    apiRequest(`${API_URL}/${task.id}`, "PUT", task),

  updateTask: (id, changes) =>
    apiRequest(`${API_URL}/${id}`, "PATCH", changes),

  deleteTask: (id) =>
    apiRequest(`${API_URL}/${id}`, "DELETE"),
};

export default function Assign() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [loading, setLoading] = useState(true);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  // GET: Fetch API data
  async function fetchTasks() {
    setLoading(true);
    setError("");

    try {
      const data = await taskAPI.getTasks();

      if (!Array.isArray(data)) {
        throw new Error("Invalid API response.");
      }

      setTasks(data);
    } catch (err) {
      setError(err.message || "Failed to fetch tasks.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchTasks();
  }, []);

  // POST: Create task
  async function addTask(e) {
    e.preventDefault();

    if (!title.trim()) {
      setError("Please enter a task title.");
      return;
    }

    setBusy(true);
    setError("");

    try {
      const newTask = await taskAPI.createTask(title.trim());

      if (!newTask) {
        throw new Error("Empty response from API.");
      }

      setTasks((prev) => [
        { ...newTask, id: newTask.id ?? Date.now() },
        ...prev,
      ]);
      setTitle("");
    } catch (err) {
      setError(err.message || "Failed to create task.");
    } finally {
      setBusy(false);
    }
  }

  // PATCH: Toggle completed status
  async function toggleTask(task) {
    setBusy(true);
    setError("");

    try {
      const updated = await taskAPI.updateTask(task.id, {
        completed: !task.completed,
      });

      if (!updated) {
        throw new Error("Empty response from API.");
      }

      setTasks((prev) =>
        prev.map((item) =>
          item.id === task.id
            ? { ...item, ...updated }
            : item
        )
      );
    } catch (err) {
      setError(err.message || "Failed to update task.");
    } finally {
      setBusy(false);
    }
  }

  // PUT or PATCH: Edit task
  async function editTask(task, method) {
    const newTitle = window.prompt(
      "Enter new task title:",
      task.title
    );

    if (newTitle === null) return;

    if (!newTitle.trim()) {
      setError("Task title cannot be empty.");
      return;
    }

    setBusy(true);
    setError("");

    try {
      const updated =
        method === "PUT"
          ? await taskAPI.replaceTask({
              ...task,
              title: newTitle.trim(),
            })
          : await taskAPI.updateTask(task.id, {
              title: newTitle.trim(),
            });

      if (!updated) {
        throw new Error("Empty response from API.");
      }

      setTasks((prev) =>
        prev.map((item) =>
          item.id === task.id
            ? { ...item, ...updated }
            : item
        )
      );
    } catch (err) {
      setError(err.message || `Failed to ${method} task.`);
    } finally {
      setBusy(false);
    }
  }

  // DELETE: Remove task
  async function removeTask(id) {
    setBusy(true);
    setError("");

    try {
      await taskAPI.deleteTask(id);

      setTasks((prev) =>
        prev.filter((task) => task.id !== id)
      );
    } catch (err) {
      setError(err.message || "Failed to delete task.");
    } finally {
      setBusy(false);
    }
  }

  // Search and filter
  const filteredTasks = tasks.filter((task) => {
    const matchesSearch = task.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesFilter =
      filter === "all" ||
      (filter === "completed" && task.completed) ||
      (filter === "pending" && !task.completed);

    return matchesSearch && matchesFilter;
  });

  const completed = tasks.filter(
    (task) => task.completed
  ).length;

  const styles = {
    page: {
      maxWidth: "850px",
      margin: "35px auto",
      padding: "25px",
      fontFamily: "Arial, sans-serif",
      background: "#ffffff",
      borderRadius: "12px",
      boxShadow: "0 4px 20px #00000012",
      color: "#1f2937",
    },
    input: {
      padding: "11px",
      border: "1px solid #d1d5db",
      borderRadius: "6px",
      flex: 1,
      minWidth: 0,
    },
    button: {
      padding: "10px 14px",
      background: "#4f46e5",
      color: "white",
      border: "none",
      borderRadius: "6px",
      cursor: "pointer",
    },
    task: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: "12px",
      padding: "13px",
      marginBottom: "10px",
      border: "1px solid #e5e7eb",
      borderRadius: "8px",
    },
  };

  return (
    <main style={styles.page}>
      <header style={{ textAlign: "center" }}>
        <h1 style={{ color: "#4f46e5" }}>TaskFlow</h1>
        <p>Manage your tasks with React API integration.</p>
      </header>

      {/* Task statistics */}
      <section
        style={{
          display: "flex",
          justifyContent: "space-around",
          gap: "10px",
          flexWrap: "wrap",
          background: "#eef2ff",
          padding: "15px",
          borderRadius: "8px",
          marginBottom: "20px",
        }}
      >
        <div>Total: {tasks.length}</div>
        <div>Completed: {completed}</div>
        <div>Pending: {tasks.length - completed}</div>
      </section>

      {/* POST form */}
      <form
        onSubmit={addTask}
        style={{
          display: "flex",
          gap: "10px",
          marginBottom: "20px",
        }}
      >
        <input
          style={styles.input}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter a new task..."
          disabled={busy}
        />
        <button style={styles.button} disabled={busy}>
          {busy ? "Please wait..." : "Add Task"}
        </button>
      </form>

      {/* Search and filtering */}
      <section
        style={{
          display: "flex",
          gap: "10px",
          marginBottom: "20px",
          flexWrap: "wrap",
        }}
      >
        <input
          style={styles.input}
          type="search"
          placeholder="Search tasks..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          style={styles.input}
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">All Tasks</option>
          <option value="completed">Completed</option>
          <option value="pending">Pending</option>
        </select>

        <button
          style={styles.button}
          onClick={fetchTasks}
          disabled={loading || busy}
        >
          Refresh
        </button>
      </section>

      {/* Error handling */}
      {error && (
        <div
          role="alert"
          style={{
            color: "#b91c1c",
            background: "#fef2f2",
            padding: "12px",
            marginBottom: "15px",
            borderRadius: "6px",
          }}
        >
          {error}
          <button
            style={{ ...styles.button, marginLeft: "10px" }}
            onClick={() => setError("")}
          >
            Close
          </button>
        </div>
      )}

      {/* Loading, empty response, and list rendering */}
      {loading ? (
        <p style={{ textAlign: "center" }}>
          Loading tasks...
        </p>
      ) : error && tasks.length === 0 ? (
        <p style={{ textAlign: "center" }}>
          Unable to load tasks.{" "}
          <button style={styles.button} onClick={fetchTasks}>
            Try Again
          </button>
        </p>
      ) : filteredTasks.length === 0 ? (
        <p style={{ textAlign: "center", color: "#6b7280" }}>
          No tasks found. Try another search or filter.
        </p>
      ) : (
        <section>
          {filteredTasks.map((task) => (
            <article key={task.id} style={styles.task}>
              <label
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  flex: "1",
                  overflowWrap: "anywhere",
                }}
              >
                <input
                  type="checkbox"
                  checked={task.completed}
                  disabled={busy}
                  onChange={() => toggleTask(task)}
                />

                <span
                  style={{
                    textDecoration: task.completed
                      ? "line-through"
                      : "none",
                    color: task.completed ? "#9ca3af" : "#1f2937",
                  }}
                >
                  {task.title}
                </span>
              </label>

              <div
                style={{
                  display: "flex",
                  gap: "6px",
                  flexWrap: "wrap",
                }}
              >
                <button
                  style={styles.button}
                  disabled={busy}
                  onClick={() => editTask(task, "PUT")}
                >
                  PUT
                </button>

                <button
                  style={styles.button}
                  disabled={busy}
                  onClick={() => editTask(task, "PATCH")}
                >
                  PATCH
                </button>

                <button
                  style={{
                    ...styles.button,
                    background: "#dc2626",
                  }}
                  disabled={busy}
                  onClick={() => removeTask(task.id)}
                >
                  DELETE
                </button>
              </div>
            </article>
          ))}
        </section>
      )}

      <footer
        style={{
          textAlign: "center",
          color: "#6b7280",
          marginTop: "25px",
          fontSize: "13px",
        }}
      >
        React • useState • useEffect • Fetch API • CRUD
      </footer>
    </main>
  );
}


export{Assign}