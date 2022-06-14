import { charactersActionTypes } from './../../store/actionTypes/characters';
import { loaderActionTypes } from '../../store/actionTypes/loader';
import { Characters, Character } from '../characters';

interface FETCH_START {
  type: loaderActionTypes.FETCH_START;
}

interface FETCH_END {
  type: loaderActionTypes.FETCH_END;
}

interface FETCH_FAILURE {
  type: loaderActionTypes.FETCH_FAILURE;
  payload: string;
}

export interface GET_CHARACTERS {
  type: charactersActionTypes.GET_CHARACTERS
}

interface SET_CHARACTERS {
  type: charactersActionTypes.SET_CHARACTERS;
  payload: Characters;
}

export interface GET_CHARACTER_BY_ID {
  type: charactersActionTypes.GET_CHARACTER_BY_ID,
  payload: number;
}

interface SET_CHARACTER_BY_ID {
  type: charactersActionTypes.SET_CHARACTER_BY_ID;
  payload: Character;
}

interface SET_FAVORITE_CHARACTER {
  type: charactersActionTypes.SET_FAVORITE_CHARACTER;
  payload: Character;
}

export type ActionType =
  FETCH_START
  | FETCH_END
  | FETCH_FAILURE
  | GET_CHARACTERS
  | SET_CHARACTERS
  | GET_CHARACTER_BY_ID
  | SET_CHARACTER_BY_ID
  | SET_FAVORITE_CHARACTER;
