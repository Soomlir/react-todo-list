import TodoListItemComponent from "./TodoListItemComponent";

function TodoListComponent() {
  return (
    <ul className="todo__list">
      <TodoListItemComponent className="todo-list__item" />
    </ul>
  );
}

export default TodoListComponent;
