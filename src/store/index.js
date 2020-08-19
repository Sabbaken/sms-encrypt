import {compose, createStore} from 'redux'
import rootReducer from './reducers'

const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose : compose;

const store = createStore(
  rootReducer,
  composeEnhancers(
    // applyMiddleware(thunk.withExtraArgument({getFirebase})),
  )
);

export default store;
