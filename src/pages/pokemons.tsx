import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { getPokemons, PokemonList } from '../features/pokemons';

export const PokemonsPage = () => {
  const { data, isLoading } = useQuery(['pokemons'], getPokemons);

  if (isLoading) {
    return <div>loading...</div>;
  }

  return (
    <div>
      <Link to="/">Products</Link>
      <PokemonList pokemons={data?.data.results} />
    </div>
  );
};

export default PokemonsPage;
