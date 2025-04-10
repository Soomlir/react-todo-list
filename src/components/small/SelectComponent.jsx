function SelectComponent() {
  return <select className="todo__select">
    <option value="all">All</option>
    <option value="complete">Complete</option>
    <option value="incomplete">Incomplete</option>
  </select>;
}

export default SelectComponent;
