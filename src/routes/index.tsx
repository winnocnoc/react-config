import { useRoutes } from 'react-router-dom';
import { PublicRoutes } from './public';

export const AppRoutes = () => {
  const element = useRoutes([...PublicRoutes]);
  return element;
};
