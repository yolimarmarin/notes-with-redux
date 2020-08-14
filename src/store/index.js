import { createStore, applyMiddleware, compose } from "redux";
import { createEpicMiddleware } from "redux-observable";
import rootEpic from "./epics";
import rootReducer from "./reducers";
import { createBrowserHistory } from "history";
import { routerMiddleware } from "connected-react-router";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

export const history = createBrowserHistory();

export const configureStore = () => {
  const persistConfig = {
    key: "root",
    storage,
    stateReconciler: autoMergeLevel2
  };

  const persistedReducer = persistReducer(persistConfig, rootReducer(history));

  const composeEnhancers =
    typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
      : compose;

  const epicMiddleware = createEpicMiddleware();

  const enhancer = composeEnhancers(
    applyMiddleware(routerMiddleware(history)),
    applyMiddleware(epicMiddleware)
  );

  const store = createStore(persistedReducer, {}, enhancer);
  const persistor = persistStore(store);
  epicMiddleware.run(rootEpic);
  return { store, persistor };
};
