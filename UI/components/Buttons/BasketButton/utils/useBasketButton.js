import { useSelector } from 'react-redux'
import { getAllCartsSelector } from '@/redux/selectorss/cartSelectors';

export const useBasketButton = ({ onClick }) => {
  const cart = useSelector(getAllCartsSelector);
  const count = cart?.reduce((acc, { quantity }) => acc + quantity, 0);

  return {
    cart,
    count,
    onClick,
  };
};