import Form from "./Form";
import TodoList from "./TodoList";
import Button from "./small/Button";
import { useState } from "react";
import Modal from "./Modal";

function Main({ toggleTheme }) {
  const [isModalOpen, setModalOpen] = useState(false);
  const [editingNote, setEditingNote] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("all");

  const [dataList, setDataList] = useState([
    { id: 1, text: "Buy products", completed: false },
    { id: 2, text: "Go street", completed: true },
  ]);

  const modalOpen = (note = null) => {
    setEditingNote(note);
    setModalOpen(true);
  };

  const modalClose = () => {
    setEditingNote(null);
    setModalOpen(false);
  };

  const handleNoteSubmit = (noteText) => {
    if (editingNote) {
      setDataList((prev) =>
        prev.map((item) =>
          item.id === editingNote.id ? { ...item, text: noteText } : item
        )
      );
    } else {
      const newNote = {
        id: Date.now(),
        text: noteText,
        completed: false,
      };
      setDataList((prev) => [...prev, newNote]);
    }

    modalClose();
  };

  const handleDelete = (id) => {
    setDataList((prev) => prev.filter((item) => item.id !== id));
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const toggleComplete = (id) => {
    setDataList((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const handleFilterChange = (value) => {
    setFilter(value);
  };

  const filteredList = dataList
    .filter((item) => {
      if (filter === "complete") return item.completed;
      if (filter === "incomplete") return !item.completed;
      return true;
    })
    .filter((item) =>
      item.text.toLowerCase().includes(searchQuery.toLowerCase())
    );

  return (
    <main>
      <div className="todo-list">
        <Form
          onSearchChange={handleSearch}
          onFilterChange={handleFilterChange}
          onToggleTheme={toggleTheme}
        />
        <TodoList
          dataList={filteredList}
          onEdit={modalOpen}
          onDelete={handleDelete}
          onToggle={toggleComplete}
        />
      </div>
      <Button onClick={() => modalOpen()} />
      <Modal
        modalStatus={isModalOpen}
        modalClose={modalClose}
        onSubmit={handleNoteSubmit}
        defaultValue={editingNote?.text || ""}
      />
    </main>
  );
}

export default Main;