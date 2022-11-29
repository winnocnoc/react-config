import * as React from 'react';

const PokemonRoutes = React.lazy(() => import('../pages/pokemons'));
const ProductRoutes = React.lazy(() => import('../pages/products'));

type PublicRoutesProps = {
  path: string;
  element: JSX.Element;
};

export const PublicRoutes: PublicRoutesProps[] = [
  {
    path: '/',
    element: <ProductRoutes />,
  },
  {
    path: '/pokemons',
    element: <PokemonRoutes />,
  },
];
