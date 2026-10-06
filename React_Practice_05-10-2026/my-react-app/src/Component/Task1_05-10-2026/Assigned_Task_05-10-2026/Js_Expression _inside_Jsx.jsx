
// js Variable

function Aye(){
    const name="Sana";
    return(
        <>
        <h1> Hello my friend {name} </h1>
        </>
    )
}

// Number

function Sa(){
    const age=40;
    return(
        <>
        <p> My age is {age} </p>
        </>
    )
}

//  Multiplication

function Du(){
    return(
        <>
        <h1> Result: {20 * 78}</h1>
        </>
    )
}

// String Concatenation

function Kar(){
    const firstName="Ayesha";
    const lastName="Fathima";

    return(
        <>
        <h2>{firstName+" " + lastName}</h2>
        </>
    )
}

// Template Literal

function Ba() {
  const name = "Sana";
  const age = 22;

  return <h1>{`My name is ${name} and I am ${age} years old.`}</h1>;
}


// Fragments
function Na() {
  const name = "Sana";
  const age = 22;

  return (
    <>
      <h1>Student Details</h1>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Next Year Age: {age + 1}</p>
    </>
  );
}







export{Aye, Sa,Du,Kar,Ba,Na};