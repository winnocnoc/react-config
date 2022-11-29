import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';
import { createProduct, ProductModel } from '../api';

interface ProductListProps {
  products?: ProductModel[];
}

export const ProductList = ({ products = [] }: ProductListProps) => {
  const [name, setName] = useState('');

  const mutation = useMutation(createProduct);

  const handleSubmit = () => {
    mutation.mutate({
      name,
    });
  };

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
      <ul>
        {products.map((product) => (
          <li key={product.sku_number}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};
