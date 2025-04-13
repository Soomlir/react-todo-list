import TodoListItem from "./TodoListItem";

function TodoList({ dataList, onEdit, onDelete, onToggle }) {
  return (
    <ul>
      {dataList.map(item => (
        <TodoListItem
          key={item.id}
          id={item.id}
          text={item.text}
          completed={item.completed}
          onEdit={onEdit}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </ul>
  );
}

export default TodoList;