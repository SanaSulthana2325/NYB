function Functional() {
  function handleClick() {
    console.log("Button clicked!");
  }

  return (
    <button onClick={handleClick}
    className="bg-orange-400">
      Click Me
    </button>
  );
}

export default Functional ;