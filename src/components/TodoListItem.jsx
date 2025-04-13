function TodoListItem({ id, text, completed, onEdit, onDelete, onToggle }) {
  return (
    <li className="todo-list__item">
      <label>
        <input
          className="todo-list__checkbox"
          type="checkbox"
          checked={completed}
          onChange={() => onToggle(id)}
        />
        <p className={`todo-list__text ${completed ? 'completed' : ''}`}>
          {text}
        </p>
      </label>
      <button onClick={() => onEdit({ id, text, completed })} className="todo-list__edit" type="button">
        <span className="visually-hidden">Редактировать запись.</span>
      </button>
      <button onClick={() => onDelete(id)} className="todo-list__delete" type="button">
        <span className="visually-hidden">Удалить запись.</span>
      </button>
    </li>
  );
}

export default TodoListItem;