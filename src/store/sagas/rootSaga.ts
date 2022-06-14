import { all } from 'redux-saga/effects';
import { charactersSaga } from './characters/characters';

export function* rootSaga() {
  yield all([charactersSaga()]);
}
