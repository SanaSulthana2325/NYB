function Ternary() {
  const online = true;

  return (
    <h2>
      {online ? 'Online' : 'Offline'}
    </h2>
  );
}

export default Ternary;