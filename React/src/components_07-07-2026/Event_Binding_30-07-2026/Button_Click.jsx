function Button_Click() {
  function handleClick() {
    alert("Button clicked!");
  }

  return (
    <button onClick={handleClick}
    className="bg-green-400 text-pink">
      Click Me
    </button>
  );
}

export default Button_Click;