

function Passing_String(props) {
  return (
    <>
    <h2>Name : {props.name}</h2>

    <br/><hr/>
    <h2>Passing number</h2>
    <h2>Age : {props.age}</h2>
    <br/><hr/>
    
    <h2>Name1 : {props.name1}</h2>
    <h2>Age1 : {props.age1}</h2>
    <h2>City1 : {props.city1}</h2>

    <br/>
    <hr/>
    <h2> passing an array</h2>
    <h2>Skills</h2>

    <ul>
        {props.skills?.map((skill, index) => (
         <li key={index}>{skill}</li>
    ))}
    </ul>
    </>
  )
}

export default Passing_String;