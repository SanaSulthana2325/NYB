function Fruit({ item = ['Apple','Mango','Orange','Grapes'] }) {
  return (
    <div>
      <ul>
        {item.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
}

export default Fruit;