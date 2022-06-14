import axios, { AxiosResponse } from 'axios';
import { Characters, Character } from '../types/characters';

const charactersAPI = {
  CONFIG: axios.create({
    baseURL: process.env.REACT_APP_BASEURL,
  }),

  getCharacters(): Promise<AxiosResponse<Characters>> {
    return charactersAPI.CONFIG.get('/character');
  },

  getCharacterById(id: number): Promise<AxiosResponse<Character>> {
    return charactersAPI.CONFIG.get(`/character/${id}`);
  },
};

export default charactersAPI;
