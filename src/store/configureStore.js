/**
 * Create the store with dynamic reducers
 */

import { createStore, applyMiddleware, compose } from "redux";
import { routerMiddleware } from "connected-react-router";
import createSagaMiddleware from "redux-saga";
import reduxLogger from "redux-logger";

import rootReducer from "./reducer";
import rootSaga from "./saga";
import history from "../browserHistory";

const configureStore = (initialState = {}) => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware, routerMiddleware(history), reduxLogger];

  const enhancers = [applyMiddleware(...middlewares)];

  // If Redux DevTools Extension is installed use it, otherwise use Redux compose
  /* eslint-disable no-underscore-dangle */
  const composeEnhancers =
    typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
          shouldHotReload: false
        })
      : compose;
  /* eslint-enable */

  // Instantiate the Store
  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(...enhancers)
  );
  sagaMiddleware.run(rootSaga);

  if (module.hot) {
    module.hot.accept("./reducer", () => {
      const nextRootReducer = require("./reducer"); // eslint-disable-line global-require
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};

export default configureStore;
