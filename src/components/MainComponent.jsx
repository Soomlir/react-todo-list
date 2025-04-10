import Form from "./FormComponent";
import TodoList from "./TodoListComponent";
import ButtonComponent from "./small/ButtonComponent";

function MainComponent() {
  return (
    <main>
      <div className="todo-list">
        <Form />
        <TodoList />
      </div>
      <ButtonComponent />
    </main>
  );
}

export default MainComponent;
