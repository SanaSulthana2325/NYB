function Mouse_Hover() {
  function enter() {
    console.log("Mouse entered");
  }

  function leave() {
    console.log("Mouse left");
  }

  return (
    <div
      onMouseEnter={enter}
      onMouseLeave={leave}
      style={{
        width: 200,
        height: 100,
        background: "lightblue",
      }}
    >
      Hover over me
    </div>
  );
}

export default Mouse_Hover;