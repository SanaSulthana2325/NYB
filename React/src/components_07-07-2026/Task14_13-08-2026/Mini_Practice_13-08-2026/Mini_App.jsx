import { useState, useMemo, useCallback } from 'react';
import useTasks from './useTask';
import TaskList from './TaskList';
import TaskFilter from './TaskFilter';

export default function Mini_App() {
  const {
    tasks,
    addTask,
    toggleTask,
    deleteTask
  } = useTasks();

  const [input, setInput] = useState('');
  const [filter, setFilter] = useState('All');

  const filteredTasks = useMemo(() => {
    console.log('Filtering tasks...');

    if (filter === 'Completed') {
      return tasks.filter(task => task.completed);
    }

    if (filter === 'Pending') {
      return tasks.filter(task => !task.completed);
    }

    return tasks;
  }, [tasks, filter]);

  const handleToggle = useCallback((id) => {
    toggleTask(id);
  }, [toggleTask]);

  const handleDelete = useCallback((id) => {
    deleteTask(id);
  }, [deleteTask]);

  const completedCount = useMemo(() => {
    return tasks.filter(task => task.completed).length;
  }, [tasks]);

  return (
    <div className='min-h-screen bg-gray-100'>
      <div className='mx-auto max-w-3xl p-8'>
        <h1 className='mb-6 text-3xl font-bold'>Task Management Dashboard</h1>

        <div className='mb-6 flex gap-3'>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder='Enter task...'
            className='flex-1 rounded-xl border p-3'
          />

          <button
            onClick={() => {
              addTask(input);
              setInput('');
            }}
            className='rounded-xl bg-green-600 px-4 py-2 text-white'
          >
            Add
          </button>
        </div>

        <TaskFilter filter={filter} setFilter={setFilter} />

        <div className='mb-6 rounded-xl bg-white p-4 shadow'>
          <h2 className='text-xl font-semibold'>Statistics</h2>
          <p>Total Tasks: {tasks.length}</p>
          <p>Completed: {completedCount}</p>
          <p>Pending: {tasks.length - completedCount}</p>
        </div>

        <TaskList
          tasks={filteredTasks}
          onToggle={handleToggle}
          onDelete={handleDelete}
        />
      </div>
    </div>
  );
}