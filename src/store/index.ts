import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { reposReducer } from './reducers/reposReducer';

export const rootReducer = combineReducers({
  repos: reposReducer,
});

export type RootSate = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer,
  composeWithDevTools(applyMiddleware(thunk)));
