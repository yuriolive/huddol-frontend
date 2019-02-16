import { createBrowserHistory } from 'history';
import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import createRootReducer from './reducers';

export const sagaMiddleware = createSagaMiddleware();

export const history = createBrowserHistory();

const composeEnhancers = (process.env.NODE_ENV === 'production') ?
  (compose) : (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose);

const configureStore = (preloadedState) => {
  const store = createStore(
    createRootReducer(history), // root reducer with router state
    preloadedState,
    composeEnhancers(
      applyMiddleware(
        sagaMiddleware,
        routerMiddleware(history), // for dispatching history actions
      ),
    ),
  );

  return store;
};

export default configureStore;