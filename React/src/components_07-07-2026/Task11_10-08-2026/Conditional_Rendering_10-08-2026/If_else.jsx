function If_else() {
    console.log("Component rendered")
  const marks = 80;

  if (marks >= 35) {
    return <h1>Pass</h1>;
  } else {
    return <h1>Fail</h1>;
  }
}

export default If_else;