import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { getProducts, ProductList } from '../features/products';

export const ProductsPage = () => {
  const { data, isLoading } = useQuery(['products'], getProducts);

  if (isLoading) {
    return <div>loading...</div>;
  }

  return (
    <div>
      <Link to="/pokemons">Pokemons</Link>
      <ProductList products={data?.data.products} />
    </div>
  );
};

export default ProductsPage;
