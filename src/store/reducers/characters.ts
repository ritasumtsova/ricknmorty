import { charactersActionTypes } from './../actionTypes/characters';
import { ActionType } from '../../types/store/actionType';
import { CharactersInitState } from '../../types/store/initState';

const initState: CharactersInitState = {
  characters: null,
  character: null,
  favoriteCharacters: [],
};

const charactersReducer = (state: CharactersInitState = initState, action: ActionType) => {
  switch (action.type) {
    case charactersActionTypes.GET_CHARACTERS:
      return {
        ...state,
      };

    case charactersActionTypes.SET_CHARACTERS:
      return {
        ...state,
        characters: action.payload,
      };

    case charactersActionTypes.GET_CHARACTER_BY_ID:
      return {
        ...state,
      };

    case charactersActionTypes.SET_CHARACTER_BY_ID:
      return {
        ...state,
        character: action.payload,
      };

    case charactersActionTypes.SET_FAVORITE_CHARACTER:
      return {
        ...state,
        favoriteCharacters: [...state.favoriteCharacters!, action.payload!],
      };

    default:
      return state;
  }
};

export default charactersReducer;
