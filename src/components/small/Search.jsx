function Search({ onChange }) {
  const handleInput = (e) => {
    onChange(e.target.value);
  };

  return (
    <input
      className="todo__item"
      placeholder="Search note..."
      onChange={handleInput}
    />
  );
}

export default Search;
