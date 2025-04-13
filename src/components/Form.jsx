import Search from "./small/Search";
import Select from "./small/Select";
import ToggleTheme from "./small/ToggleTheme";

function Form({ onSearchChange, onFilterChange, onToggleTheme }) {
  return (
    <form className="todo__form" onSubmit={(e) => e.preventDefault()}>
      <Search onChange={onSearchChange} />
      <Select onChange={onFilterChange} />
      <ToggleTheme onClick={onToggleTheme} />
    </form>
  );
}


export default Form;
