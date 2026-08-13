import React from 'react';

const TaskItem = React.memo(function TaskItem({ task, onToggle, onDelete }) {
  console.log(task.text, 'rendered');

  return (
    <div className='flex items-center justify-between rounded-xl bg-white p-4 shadow'>
      <div className='flex items-center gap-3'>
        <input
          type='checkbox'
          checked={task.completed}
          onChange={() => onToggle(task.id)}
        />

        <span className={task.completed ? 'line-through text-gray-400' : 'text-gray-800'}>
          {task.text}
        </span>
      </div>

      <button
        onClick={() => onDelete(task.id)}
        className='rounded-lg bg-red-500 px-3 py-1 text-white'
      >
        Delete
      </button>
    </div>
  );
});

export default TaskItem;