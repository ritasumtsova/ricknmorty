import { GET_CHARACTER_BY_ID } from './../../../types/store/actionType';
import { setCharacters, setCharacterById } from './../../actionCreators/characters';
import { put, takeEvery, call } from 'redux-saga/effects';
import { AxiosResponse, AxiosError } from 'axios';
import { fetchStart, fetchEnd, fetchFailure } from '../../actionCreators/loader';
import charactersAPI from '../../../api/characters';
import { Character, Characters } from './../../../types/characters';
import { charactersActionTypes } from '../../actionTypes/characters';

const callEffect: any = call;

function* getCharacters() {
  yield put(fetchStart());

  try {
    const res: AxiosResponse<Characters> = yield callEffect(charactersAPI.getCharacters);
    const characters: Characters = res.data;

    yield put(setCharacters(characters));
  } catch (error) {
    yield put(fetchFailure(error as AxiosError));
  } finally {
    yield put(fetchEnd());
  }
}

function* getCharacterById(action: GET_CHARACTER_BY_ID) {
  yield put(fetchStart());

  try {
    const res: AxiosResponse<Character> = yield callEffect(charactersAPI.getCharacterById, action.payload);
    const character: Character = res.data;

    yield put(setCharacterById(character));
  } catch (error) {
    yield put(fetchFailure(error as AxiosError));
  } finally {
    yield put(fetchEnd());
  }
}

export function* charactersSaga() {
  yield takeEvery(charactersActionTypes.GET_CHARACTERS, getCharacters);
  yield takeEvery(charactersActionTypes.GET_CHARACTER_BY_ID, getCharacterById);
}
