import React from "react";
import "./home.css";
import TRASH_ICON_SVG from "../../assets/icons/trash.svg";
import EDIT_ICON_SVG from "../../assets/icons/edit.svg";

const HomeView = ({ 
    notes = [],
    onClickSelectNote,
    onClickDeleteNote,
    onClickCreateNewNote,
    onChangeNewNoteBody,
    onChangeNewNoteTitle,
    onClickSaveChanges,
    onChangeCurrentNoteBody,
    onChangeCurrentNoteTitle, 
    newNote, 
    currentNote,
    onClickLogOut
}) => {
  return (
    <div className="notes-main-container">
      <div className="children-container">
        <div className="children-text">Editar nota</div>

        <input
          onChange={onChangeCurrentNoteTitle}
          placeholder="Titulo"
          value={currentNote.title}
          disabled={!currentNote.id}
        />

        <textarea
          onChange={onChangeCurrentNoteBody}
          placeholder="Contenido"
          value={currentNote.body}
          disabled={!currentNote.id}
        />

        <button onClick={onClickSaveChanges} disabled={!currentNote.id}>
          Guardar
        </button>
      </div>

      <div className="children-container">
        <div className="children-text">Crea una nueva nota</div>
        <input
          onChange={onChangeNewNoteTitle}
          placeholder="Titulo"
          value={newNote.title}
        />
        <textarea
          onChange={onChangeNewNoteBody}
          placeholder="Contenido"
          value={newNote.body}
        />
        <button onClick={onClickCreateNewNote} disabled={newNote.title === ""}>
          Crear
        </button>
      </div>

      <div className="all-notes-container">
        {notes.map((note, key) => (
          <div className="note-container" key={key}>
            <div className="note-title">{note.title}</div>
            <div className="note-body">{note.body}</div>
            <img
              src={TRASH_ICON_SVG}
              className="delete-icon"
              alt="trash icon"
              onClick={() => onClickDeleteNote(note.id)}
            />
            <img
              src={EDIT_ICON_SVG}
              className="edit-icon"
              alt="trash icon"
              onClick={() => onClickSelectNote(note)}
            />
          </div>
        ))}
      </div>
      <button onClick={onClickLogOut}>
          Cerrar Sesion
        </button>
    </div>
  );
};

export default HomeView;
