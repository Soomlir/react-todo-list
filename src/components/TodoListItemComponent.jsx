function TodoListItemComponent() {
  return (
    <li className="todo-list__item">
      <label>
        <input className="todo-list__checkbox" type="checkbox" />
        <p className="todo-list__text">Buy products</p>
      </label>
      <button className="todo-list__edit" type="button">
        <span className="visually-hidden">Редактировать запись.</span>
      </button>
      <button className="todo-list__delete" type="button">
        <span className="visually-hidden">Удалить запись.</span>
      </button>
    </li>
  );
}

export default TodoListItemComponent;
