import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import MainReducer from "../store/reducers/mainReducer";
import ReduxThunk from "redux-thunk";

const rootReducer = combineReducers({
  main: MainReducer
});

let composeEnhancers = compose;

const configureStore = () => {
  return createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(ReduxThunk))
  );
};

export default configureStore;
