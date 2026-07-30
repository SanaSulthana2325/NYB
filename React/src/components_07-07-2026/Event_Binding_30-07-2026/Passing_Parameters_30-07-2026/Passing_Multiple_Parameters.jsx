function Passing_Multiple_Parameters() {
  function student(name, age) {
    console.log(name + " is " + age + " years old");
  }

  return (
    <button onClick={() => student("Sara", 21)}
    className="bg-red-500">
      Student Info
    </button>
  );
}

export default Passing_Multiple_Parameters;