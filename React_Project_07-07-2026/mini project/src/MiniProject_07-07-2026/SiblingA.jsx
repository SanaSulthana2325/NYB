function SiblingA(props) {

  return (
    <>
      <button onClick={() => props.changeName("Sana")}>
        Change Name
      </button>
    </>
  );
}

export default SiblingA;