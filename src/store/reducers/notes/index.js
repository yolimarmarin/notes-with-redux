import *  as types from '../../constants'

const initialState = {
  notes: null
};

const notesStore = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.NOTES.ACTION_UPDATE_NOTES_STORE:
      return { ...state, notes: [...payload] };
    case types.NOTES.ACTION_UPDATE_NOTE_BY_ID:
      return {...state, notes: state.notes.map((note)=> note.id === payload.id ? {...payload.note, id: note.id}: note) }
    case types.NOTES.ACTION_DELETE_NOTE_BY_ID:
      return {...state, notes:state.notes.filter((note)=>note.id !== payload)}
    case types.NOTES.ACTION_CLEAR_NOTES_STORE:
      return {...initialState}
      default:
      return state;
  }
};

export default notesStore;
