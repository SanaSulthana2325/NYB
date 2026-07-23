function Counter({ count, increment }) {

  return (
    <>
      <h2>{count}</h2>

      <button onClick={increment}
      className="bg-pink-500">
        Increment
      </button>
    </>
  );
}
 export default Counter;