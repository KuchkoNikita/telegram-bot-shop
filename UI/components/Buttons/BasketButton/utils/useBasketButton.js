import { useSelector } from 'react-redux';
import { getAllCartsSelector } from '@/redux/selectors';

export const useBasketButton = ({ onClick }) => {
  const cart = useSelector(getAllCartsSelector);
  const count = cart?.reduce((acc, { productOption }) => acc + productOption.quantity, 0);
  const isShowButton = count !== 0;

  return {
    count,
    isShowButton,
    onClick,
  };
};
