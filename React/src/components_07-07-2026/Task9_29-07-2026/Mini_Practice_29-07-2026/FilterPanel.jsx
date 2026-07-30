function FilterPanel({ vegOnly, setVegOnly }) {
  return (
    <label>
      <input
        type="checkbox"
        checked={vegOnly}
        onChange={() => setVegOnly(!vegOnly)}
      />
      Veg Only
    </label>
  );
}

export default FilterPanel;