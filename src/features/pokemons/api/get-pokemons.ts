import { z } from 'zod';
import { API } from '../../../apis/apis';
import { AxiosPromise, Axios } from '../../../apis/axiosInstance';

const PokemonSchema = z.object({
  name: z.string(),
  url: z.string(),
});

const PokemonListSchema = z.object({
  count: z.number(),
  next: z.string().nullable(),
  previous: z.string().nullable(),
  results: z.array(PokemonSchema),
});

export type PokemonModel = z.infer<typeof PokemonSchema>;
export type PokemonListModel = z.infer<typeof PokemonListSchema>;

export const getPokemons = (): AxiosPromise<PokemonListModel> => {
  return Axios.get(API.PokemonAPIs.GET_POKEMONS_LIST);
};
