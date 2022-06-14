import { combineReducers } from 'redux';
import loaderReducer from './loader';
import charactersReducer from './characters';

const rootReducer = combineReducers({
  characters: charactersReducer,
  loader: loaderReducer
});

export default rootReducer;
