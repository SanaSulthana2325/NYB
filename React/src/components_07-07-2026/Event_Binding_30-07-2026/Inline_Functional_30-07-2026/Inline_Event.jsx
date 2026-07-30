function Inline_Event() {
  function handleClick() {
    alert("Button clicked!");
  }

  return (
    <button onClick={() => handleClick()}
    className="bg-red-200">
      Click Me
    </button>
  );
}

export default Inline_Event;