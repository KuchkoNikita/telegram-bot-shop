import { useSelector } from 'react-redux';
import { getAllCartsSelector } from '@/redux/selectors';
import { vibrationClick } from '@/utils/helpers';

export const useBasketButton = ({ onClick, isShow }) => {
  const cart = useSelector(getAllCartsSelector);
  const count = cart?.reduce((acc, { productOption }) => acc + productOption.quantity, 0);
  const isShowButton = !isShow && count !== 0;

  return {
    count,
    isShowButton,
    onClick: vibrationClick(onClick),
  };
};
