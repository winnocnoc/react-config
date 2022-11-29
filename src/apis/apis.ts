import { PokemonAPIs } from './pokemons';
import { ProductAPIs } from './products';

export const API = { PokemonAPIs, ProductAPIs };
export type APIModel = typeof API;
