import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';

import appReducer from './appReducer';
import saga from './saga';

const sagaMiddleware = createSagaMiddleware();

export default function configureStore() {
  const store = createStore(appReducer, applyMiddleware(sagaMiddleware));

  sagaMiddleware.run(saga);

  return store;
}
