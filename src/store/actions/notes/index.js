import * as types from "../../constants";

const actionUpdateNotes = (notes) => ({
  type: types.NOTES.ACTION_UPDATE_NOTES_STORE,
  payload: notes,
});

const actionUpdateNotebyId = (object) => ({
  type: types.NOTES.ACTION_UPDATE_NOTE_BY_ID,
  payload: object,
});

const actionDeleteNoteById = (id) =>({
  type: types.NOTES.ACTION_DELETE_NOTE_BY_ID,
  payload: id,
})

const actionClearNotesStore = () =>({
  type:types.NOTES.ACTION_CLEAR_NOTES_STORE
})

const epicFetchNotesByUserId = (uid) => ({
  type: types.NOTES.EPIC_FETCH_NOTES_BY_USER_ID,
  payload: uid
});

const epicCreateNote = (note) => ({
  type: types.NOTES.EPIC_CREATE_NOTE,
  payload: note,
});

const epicUpdateNoteById = (id, note) => ({
  type: types.NOTES.EPIC_UPDATE_NOTE_BY_ID,
  payload: { id: id, note: note },
});

const epicDeleteNoteById = (id) => ({
  type: types.NOTES.EPIC_DELETE_NOTE_BY_ID,
  payload: id,
});

const actions = {
  actionUpdateNotes,
  actionUpdateNotebyId,
  actionDeleteNoteById,
  actionClearNotesStore
};

const epics = {
  epicFetchNotesByUserId,
  epicCreateNote,
  epicUpdateNoteById,
  epicDeleteNoteById
};

const notes = {
  actions,
  epics,
};

export default notes;
