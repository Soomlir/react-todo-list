import { useState, useEffect } from "react";

function Modal({ modalStatus, modalClose, onSubmit, defaultValue }) {
  const [note, setNote] = useState('');

  useEffect(() => {
    setNote(defaultValue); // каждый раз при открытии устанавливаем текст
  }, [defaultValue]);

  const handleChange = (event) => {
    setNote(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (note.trim() === '') return;
    onSubmit(note);
    setNote('');
  };

  return (
    <div className={`modal ${modalStatus ? "modal--show" : ""}`}>
      <div className="modal__content">
        <h2 className="modal__title">Add / Edit Note</h2>
        <form onSubmit={handleSubmit}>
          <input
            className="modal__input"
            type="text"
            placeholder="Input your note..."
            value={note}
            onChange={handleChange}
          />
          <button className="modal__apply" type="submit">Apply</button>
          <button onClick={modalClose} className="modal__cancel" type="button">Cancel</button>
        </form>
      </div>
    </div>
  );
}

export default Modal;
