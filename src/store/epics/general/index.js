import { ofType } from "redux-observable";
import emmit from "../../actions";
import * as types from "../../constants";
import {map} from "rxjs/operators";

export const epicClearStore = (action$) => {
  return action$.pipe(
    ofType(types.GENERAL.EPIC_CLEAR_STORE),
    map(() => emmit.notes.actions.actionClearNotesStore()),
    map(()=> emmit.user.actions.actionClearUserStore())
  );
};




