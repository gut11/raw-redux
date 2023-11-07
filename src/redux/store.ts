import { combineReducers, legacy_createStore } from "redux";
import counterReducer from "./reducers/counterReducer";
import loginReducer from "./reducers/loginReuducer";

// Reducer that is nothing more than a function that is capable of changing a state in some way.

const reducers = combineReducers({
  counter: counterReducer,
  login: loginReducer,
});

const store = legacy_createStore(
  reducers,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
  (window as any).__REDUX_DEVTOOLS_EXTENSION__(),
);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
