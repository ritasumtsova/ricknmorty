interface LocationName {
  name: string;
}
export interface Character {
  id: number;
  name: string;
  species: string;
  gender: string;
  location: LocationName;
  episode: string[];
  status: string
  created: string;
}

export interface Characters {
  results: Character[];
}
