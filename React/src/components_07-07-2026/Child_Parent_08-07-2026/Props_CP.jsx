

function Props_CP(props) {
  const list =["React","Java","SQL"];
  return (
    <>
    <button onClick={() => props.sendMessage("Hello Parent!")}>
        Send Message</button>

        <hr/>
        <h2>send a number</h2>
        <button onClick={() => props.sendAge(22)}>
        Send Age</button>
        <h2/>
        <hr/>
        <h2> Array</h2>
        <button onClick={() => props.sendCourse(list)}>Send Courses</button>

        <hr/>
        <h2>button counter</h2>
        <button onClick={props.increase}>Increment</button>

    </>
  )
}

export default Props_CP