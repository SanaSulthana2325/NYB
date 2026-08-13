export default function TaskFilter({ filter, setFilter }) {
  return (
    <div className='mb-6 flex gap-3'>
      {['All', 'Pending', 'Completed'].map(item => (
        <button
          key={item}
          onClick={() => setFilter(item)}
          className={`rounded-xl px-4 py-2 ${
            filter === item
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200'
          }`}
        >
          {item}
        </button>
      ))}
    </div>
  );
}