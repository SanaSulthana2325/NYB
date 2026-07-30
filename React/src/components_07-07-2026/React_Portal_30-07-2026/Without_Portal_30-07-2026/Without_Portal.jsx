function Without_Portal() {
  return (
    <div>
      <h1>My App</h1>
      <Modal />
    </div>
  );
}

function Modal() {
  return (
    <div style={{ background: "lightblue", padding: 20 }}>
      I am a Modal
    </div>
  );
}

export default Without_Portal;