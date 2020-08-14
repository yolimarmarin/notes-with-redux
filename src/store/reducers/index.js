import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import notesStore from './notes';
import userStore from './user'

const rootReducer = (history) => 
combineReducers({
  notesStore,
  userStore,
  router: connectRouter(history)
  });

export default rootReducer;

