
import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import axios from "axios";

// =====================================
// 1. CONTEXT API
// =====================================

const TaskContext = createContext(null);

function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // API integration
  const fetchTasks = async () => {
    setLoading(true);
    setError("");

    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos?_limit=5"
      );

      const apiTasks = response.data.map((item) => ({
        id: item.id,
        title: item.title,
        priority: "Medium",
        completed: item.completed,
      }));

      setTasks(apiTasks);
    } catch {
      setError("Failed to load tasks. Please check your internet.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const addTask = (task) => {
    setTasks((prev) => [
      { ...task, id: Date.now(), completed: false },
      ...prev,
    ]);
  };

  const editTask = (id, updatedTask) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, ...updatedTask } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        loading,
        error,
        addTask,
        editTask,
        deleteTask,
        toggleTask,
        fetchTasks,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}

// =====================================
// 2. CUSTOM HOOK
// =====================================

function useTasks() {
  const context = useContext(TaskContext);

  if (!context) {
    throw new Error("useTasks must be inside TaskProvider");
  }

  return context;
}

// =====================================
// 3. HEADER COMPONENT
// =====================================

function Header() {
  return (
    <header className="mb-8 text-center">
      <h1 className="text-4xl font-extrabold text-indigo-600">
        TaskFlow
      </h1>
      <p className="mt-2 text-gray-500">
        Organize your work, one task at a time.
      </p>
    </header>
  );
}

// =====================================
// 4. STATS COMPONENT
// =====================================

function Stats({ tasks }) {
  const total = tasks.length;
  const completed = tasks.filter((task) => task.completed).length;
  const pending = total - completed;

  const cards = [
    { label: "Total Tasks", value: total, color: "text-indigo-600" },
    { label: "Completed", value: completed, color: "text-green-600" },
    { label: "Pending", value: pending, color: "text-orange-500" },
  ];

  return (
    <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
      {cards.map((card) => (
        <div key={card.label} className="rounded-xl bg-white p-5 shadow-sm">
          <p className="text-sm text-gray-500">{card.label}</p>
          <h2 className={`mt-2 text-3xl font-bold ${card.color}`}>
            {card.value}
          </h2>
        </div>
      ))}
    </div>
  );
}

// =====================================
// 5. TASK FORM COMPONENT
// =====================================

function TaskForm({ editingTask, onCancelEdit }) {
  const { addTask, editTask } = useTasks();

  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [formError, setFormError] = useState("");

  useEffect(() => {
    setTitle(editingTask ? editingTask.title : "");
    setPriority(editingTask ? editingTask.priority : "Medium");
    setFormError("");
  }, [editingTask]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!title.trim()) {
      setFormError("Task title is required.");
      return;
    }

    if (title.trim().length < 3) {
      setFormError("Title must contain at least 3 characters.");
      return;
    }

    const taskData = {
      title: title.trim(),
      priority,
    };

    if (editingTask) {
      editTask(editingTask.id, taskData);
      onCancelEdit();
    } else {
      addTask(taskData);
    }

    setTitle("");
    setPriority("Medium");
    setFormError("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-6 rounded-xl bg-white p-6 shadow-sm"
    >
      <h2 className="mb-4 text-xl font-bold text-gray-800">
        {editingTask ? "Edit Task" : "Add a New Task"}
      </h2>

      <div className="flex flex-col gap-4 sm:flex-row">
        <div className="flex-1">
          <label htmlFor="title" className="mb-2 block text-sm font-medium">
            Task Title
          </label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
              setFormError("");
            }}
            placeholder="Enter task title..."
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-indigo-500"
          />
        </div>

        <div className="sm:w-44">
          <label htmlFor="priority" className="mb-2 block text-sm font-medium">
            Priority
          </label>
          <select
            id="priority"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3"
          >
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>
        </div>
      </div>

      {formError && (
        <p className="mt-3 text-sm text-red-600">{formError}</p>
      )}

      <div className="mt-4 flex gap-3">
        <button
          type="submit"
          className="rounded-lg bg-indigo-600 px-5 py-3 font-medium text-white hover:bg-indigo-700"
        >
          {editingTask ? "Save Changes" : "Add Task"}
        </button>

        {editingTask && (
          <button
            type="button"
            onClick={onCancelEdit}
            className="rounded-lg border px-5 py-3 hover:bg-gray-50"
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}

// =====================================
// 6. SEARCH AND FILTER COMPONENT
// =====================================

function TaskFilters({ search, setSearch, filter, setFilter }) {
  return (
    <div className="mb-5 flex flex-col gap-3 sm:flex-row">
      <input
        type="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search tasks..."
        aria-label="Search tasks"
        className="flex-1 rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:border-indigo-500"
      />

      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        aria-label="Filter tasks"
        className="rounded-lg border border-gray-300 bg-white px-4 py-3 sm:w-48"
      >
        <option value="all">All Tasks</option>
        <option value="pending">Pending</option>
        <option value="completed">Completed</option>
      </select>
    </div>
  );
}

// =====================================
// 7. SINGLE TASK COMPONENT
// =====================================

function TaskItem({ task, onToggle, onEdit, onDelete }) {
  const priorityColors = {
    High: "bg-red-100 text-red-700",
    Medium: "bg-yellow-100 text-yellow-700",
    Low: "bg-blue-100 text-blue-700",
  };

  return (
    <div className="flex flex-col gap-4 rounded-xl border bg-white p-4 shadow-sm sm:flex-row sm:items-center">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
        aria-label={`Mark ${task.title} as ${
          task.completed ? "pending" : "completed"
        }`}
        className="h-5 w-5 accent-indigo-600"
      />

      <div className="min-w-0 flex-1">
        <h3
          className={`break-words font-semibold ${
            task.completed
              ? "text-gray-400 line-through"
              : "text-gray-800"
          }`}
        >
          {task.title}
        </h3>

        <div className="mt-2 flex flex-wrap items-center gap-2">
          <span
            className={`rounded-full px-3 py-1 text-xs font-medium ${
              priorityColors[task.priority] || priorityColors.Medium
            }`}
          >
            {task.priority} Priority
          </span>

          <span
            className={`text-xs ${
              task.completed ? "text-green-600" : "text-orange-500"
            }`}
          >
            {task.completed ? "Completed" : "Pending"}
          </span>
        </div>
      </div>

      <div className="flex gap-2">
        <button
          type="button"
          onClick={() => onEdit(task)}
          className="rounded-lg bg-indigo-50 px-3 py-2 text-sm text-indigo-700 hover:bg-indigo-100"
        >
          Edit
        </button>

        <button
          type="button"
          onClick={() => onDelete(task.id)}
          className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-600 hover:bg-red-100"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

// =====================================
// 8. TASK LIST COMPONENT
// =====================================

function TaskList({
  tasks,
  loading,
  error,
  onRetry,
  onToggle,
  onEdit,
  onDelete,
}) {
  if (loading) {
    return (
      <div className="rounded-xl bg-white p-10 text-center">
        <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-indigo-200 border-t-indigo-600" />
        <p className="mt-4 text-gray-600">Loading tasks from API...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-xl bg-white p-8 text-center">
        <p className="text-red-600">{error}</p>
        <button
          type="button"
          onClick={onRetry}
          className="mt-4 rounded-lg bg-indigo-600 px-5 py-2 text-white hover:bg-indigo-700"
        >
          Try Again
        </button>
      </div>
    );
  }

  if (tasks.length === 0) {
    return (
      <div className="rounded-xl bg-white p-10 text-center">
        <h3 className="text-lg font-semibold text-gray-700">
          No tasks found
        </h3>
        <p className="mt-2 text-sm text-gray-500">
          Try another search or add a new task.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={onToggle}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

// =====================================
// 9. MAIN APP COMPONENT
// =====================================

function TaskApp() {
  const {
    tasks,
    loading,
    error,
    deleteTask,
    toggleTask,
    fetchTasks,
  } = useTasks();

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [editingTask, setEditingTask] = useState(null);

  const filteredTasks = tasks.filter((task) => {
    const matchesSearch = task.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesFilter =
      filter === "all" ||
      (filter === "pending" && !task.completed) ||
      (filter === "completed" && task.completed);

    return matchesSearch && matchesFilter;
  });

  const handleEdit = (task) => {
    setEditingTask(task);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = (id) => {
    deleteTask(id);

    if (editingTask?.id === id) {
      setEditingTask(null);
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <Header />

        <Stats tasks={tasks} />

        <TaskForm
          editingTask={editingTask}
          onCancelEdit={() => setEditingTask(null)}
        />

        <section className="rounded-xl bg-slate-100 p-4 sm:p-6">
          <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
            <h2 className="text-xl font-bold text-gray-800">
              Your Tasks
            </h2>

            <button
              type="button"
              onClick={fetchTasks}
              disabled={loading}
              className="rounded-lg border border-indigo-200 bg-white px-4 py-2 text-sm text-indigo-700 hover:bg-indigo-50 disabled:opacity-50"
            >
              {loading ? "Refreshing..." : "Refresh API"}
            </button>
          </div>

          <TaskFilters
            search={search}
            setSearch={setSearch}
            filter={filter}
            setFilter={setFilter}
          />

          <p className="mb-4 text-sm text-gray-500">
            Showing {filteredTasks.length} of {tasks.length} tasks
          </p>

          <TaskList
            tasks={filteredTasks}
            loading={loading}
            error={error}
            onRetry={fetchTasks}
            onToggle={toggleTask}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        </section>

        <footer className="mt-8 text-center text-sm text-gray-500">
          Built with React, Context API and Tailwind CSS.
        </footer>
      </div>
    </main>
  );
}

// =====================================
// 10. EXPORT APP WITH CONTEXT PROVIDER
// =====================================

export default function Mini3() {
  return (
    <TaskProvider>
      <TaskApp />
    </TaskProvider>
  );
}
