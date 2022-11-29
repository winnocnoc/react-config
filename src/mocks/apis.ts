import { API, APIModel } from './../apis/apis';
import { MockPokemons } from './pokemons/index';
import { MockProducts } from './products';

export const JSONFiles: Record<string, string> = {
  ...MockPokemons,
  ...MockProducts,
};
