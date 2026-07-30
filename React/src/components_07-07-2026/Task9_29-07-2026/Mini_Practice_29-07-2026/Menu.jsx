function Menu({ items }) {
  return (
    <div>
      {items.map((item) => (
        <p key={item.id}>{item.name}</p>
      ))}
    </div>
  );
}

export default Menu;