import { ActionType } from '../../types/store/actionType';
import { charactersActionTypes } from '../actionTypes/characters';
import { Characters, Character } from './../../types/characters';

export const getCharacters = (): ActionType => {
  return {
    type: charactersActionTypes.GET_CHARACTERS,
  };
};

export const setCharacters = (characters: Characters): ActionType => {
  return {
    type: charactersActionTypes.SET_CHARACTERS,
    payload: characters
  };
};

export const getCharacterById = (id: number): ActionType => {
  return {
    type: charactersActionTypes.GET_CHARACTER_BY_ID,
    payload: id
  };
};

export const setCharacterById = (character: Character): ActionType => {
  return {
    type: charactersActionTypes.SET_CHARACTER_BY_ID,
    payload: character
  };
};

export const setFavoriteCharacter = (character: Character): ActionType => {
  return {
    type: charactersActionTypes.SET_FAVORITE_CHARACTER,
    payload: character
  };
};
