function Select({ onChange }) {
  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <select className="todo__select" onChange={handleChange}>
      <option value="all">All</option>
      <option value="complete">Complete</option>
      <option value="incomplete">Incomplete</option>
    </select>
  );
}

export default Select;
