import { PokemonAPIs } from '../../apis/pokemons';
import { API } from './../../apis/apis';

export const MockPokemons: Record<PokemonAPIs, string> = {
  [API.PokemonAPIs.GET_POKEMONS_LIST]: 'pokemons/pokemons.json',
};
