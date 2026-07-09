function Counter2({ count, setCount }) {
  return (
    <button onClick={() => setCount(count + 1)}>
      Increment
    </button>
  );
}

export default Counter2;