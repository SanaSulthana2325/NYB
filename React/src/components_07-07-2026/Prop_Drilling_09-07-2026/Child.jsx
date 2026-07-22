import GrandChild from "./GrandChild"


function Child(props) {
  return (
    <>
    <GrandChild name={props.name}/>
    
    </>
  )
}

export default Child;