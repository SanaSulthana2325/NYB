function Form_Submitted() {
  function submit(event) {
    event.preventDefault();
    alert("Form submitted");
  }

  return (
    <form onSubmit={submit}>
      <button type="submit" className="bg-pink-200">
        Submit
      </button>
    </form>
  );
}

export default Form_Submitted