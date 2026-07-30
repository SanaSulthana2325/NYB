function Focus_Blur() {
  function handleFocus() {
    console.log("Input Focused");
  }

  function handleBlur() {
    console.log("Input Lost Focus");
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your name"
        onFocus={handleFocus}
        onBlur={handleBlur}
      className="border border-orange-400"/>
    </div>
  );
}

export default Focus_Blur;