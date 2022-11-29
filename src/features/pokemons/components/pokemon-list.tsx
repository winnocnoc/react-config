import { PokemonModel } from '../api';

interface PokemonListProps {
  pokemons?: PokemonModel[];
}

export const PokemonList = ({ pokemons = [] }: PokemonListProps) => {
  return (
    <ul>
      {pokemons.map((pokemon) => (
        <li key={pokemon.name}>{pokemon.name}</li>
      ))}
    </ul>
  );
};
