import { createStore, applyMiddleware, compose} from 'redux'
import { createEpicMiddleware } from 'redux-observable';
import rootEpic from './epics'
import rootReducer from './reducers'
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';

export const history = createBrowserHistory();

export const configureStore = () =>{
    const composeEnhancers =
        typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
          ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
          : compose;
    
          const epicMiddleware = createEpicMiddleware();

      const enhancer = composeEnhancers(
        applyMiddleware(routerMiddleware(history)),
        applyMiddleware(epicMiddleware)
      );
    const store = createStore(rootReducer(history), {}, enhancer);
    epicMiddleware.run(rootEpic);
    return store
}


