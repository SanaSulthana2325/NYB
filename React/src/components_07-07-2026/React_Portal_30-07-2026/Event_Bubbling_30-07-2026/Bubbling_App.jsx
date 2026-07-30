import Bubbling from "./Bubbling";


function Bubbling_App() {
  return (
    <div onClick={() => console.log("Parent clicked")}>
      <Bubbling/>
    </div>
  );
}

export default Bubbling_App;