import { useSelector } from 'react-redux';
import { getAllCartsSelector } from '@/redux/selectors';

export const useBasketButton = ({ onClick }) => {
  const cart = useSelector(getAllCartsSelector);
  const count = cart?.reduce((acc, { productOption }) => acc + productOption.quantity, 0);

  return {
    cart,
    count,
    onClick,
  };
};
