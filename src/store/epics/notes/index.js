import { ofType } from "redux-observable";
import { getNotesByUserId, createNote, updateNoteById, deleteNoteById } from "../../../data/client-http";
import emmit from "../../actions";
import * as types from "../../constants";
import { from } from "rxjs";
import { mergeMap, map, flatMap } from "rxjs/operators";

export const fetchNotesByUserIdEpic = (action$) => {
  return action$.pipe(
    ofType(types.NOTES.EPIC_FETCH_NOTES_BY_USER_ID),
    mergeMap((action) => from(getNotesByUserId(action.payload))),
    map((notes) => emmit.notes.actions.actionUpdateNotes(notes))
  );
};

export const createNoteEpic = (action$, state$) => {
  return action$.pipe(
    ofType(types.NOTES.EPIC_CREATE_NOTE),
    flatMap(async (action) => {
        const note = await createNote(action.payload)
        return emmit.notes.actions.actionUpdateNotes([...state$.value.notesStore.notes,note])
    })
  );
};

export const updateNoteEpic = (action$) => {
    return action$.pipe(
      ofType(types.NOTES.EPIC_UPDATE_NOTE_BY_ID),
      flatMap(async (action) => {
          await updateNoteById(action.payload.id, action.payload.note)
          return emmit.notes.actions.actionUpdateNotebyId(action.payload)
      })
    );
  };

  export const deleteNoteEpic = (action$) => {
    return action$.pipe(
      ofType(types.NOTES.EPIC_DELETE_NOTE_BY_ID),
      flatMap(async (action) => {
          await deleteNoteById(action.payload)
          return emmit.notes.actions.actionDeleteNoteById(action.payload)
      })
    );
  };

