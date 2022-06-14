import { Character, Characters } from '../characters';

export interface LoaderInitState {
  loading: boolean;
  errorMessage: string;
}

export interface CharactersInitState {
  characters: Characters | null | undefined;
  character: Character | null | undefined;
  favoriteCharacters: Character[];
}
