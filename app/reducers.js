import { combineReducers } from 'redux';
import appReducer from 'containers/App/reducer';

export default function createReducer() {
  return combineReducers({
    app: appReducer,
  });
}
