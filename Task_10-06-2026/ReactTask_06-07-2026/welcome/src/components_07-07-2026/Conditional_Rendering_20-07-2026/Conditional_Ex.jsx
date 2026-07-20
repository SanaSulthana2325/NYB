function Conditional_Ex() {

  const fruits = ["Apple", "Mango","banana"];

  return (
    <div>

      {
        fruits.length > 0
        ? fruits.map((fruit,index)=>
            <p key={index}>{fruit}</p>
          )
        : <h2>No Fruits Available</h2>
      }

    </div>
  );

}

export default Conditional_Ex;