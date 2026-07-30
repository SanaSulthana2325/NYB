function Passing_Number() {

  function showNumber(num) {
    console.log("Number is " + num);
  }

  return (
    <button onClick={() => showNumber(10)}
    className="bg-purple-500">
      Show Number
    </button>
  );
}

export default Passing_Number;