

function Child(props) {
  return (
    <>
    <button onClick={() => props.sendData("Hello Parent!")}>
        Send Data To Parent
    </button>
    </>
  )
}

export default Child;