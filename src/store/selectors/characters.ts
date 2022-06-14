import { CharactersInitState } from './../../types/store/initState';
import { rootState } from '../../types/store/rootState';

export const charactersSelector = (state: rootState): CharactersInitState => {
  return {
    characters: state.characters?.characters,
    character: state.characters.character,
    favoriteCharacters: state.characters.favoriteCharacters,
  }
};
