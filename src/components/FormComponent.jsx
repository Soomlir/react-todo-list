import Search from "./small/SearchComponent";
import Select from "./small/SelectComponent";
import ToggleTheme from "./small/ToggleThemeComponent";

function FormComponent() {
  return (
    <form className="todo__form">
      <Search />
      <Select />
      <ToggleTheme />
    </form>
  );
}

export default FormComponent;
