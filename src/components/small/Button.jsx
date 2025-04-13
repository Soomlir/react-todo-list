function Button({onClick}) {
  return (
    <button onClick={onClick} className="todo__new-post" type="button">
      <span className="visually-hidden">Создать новую заметку.</span>
    </button>
  );
}

export default Button;
