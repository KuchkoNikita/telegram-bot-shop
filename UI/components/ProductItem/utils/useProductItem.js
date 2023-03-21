import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { addToCart, removeItem } from '@/redux/actions/cartSlice';

export const useProductItem = ({
  product,
  onClick,
}) => {
  const {
    type,
    title,
    details,
    price,
    image,
  } = product;

  const dispatch = useDispatch()
  const [countProduct, setCountProduct] = useState(0);

  const handlePlusClick = () => {
    dispatch(addToCart(product));
    setCountProduct((prevState => prevState + 1));
  };

  const handleMinusClick = () => {
    dispatch(removeItem(product));
    setCountProduct((prevState => prevState - 1));
  };

  return {
    type,
    title,
    details,
    price,
    image,
    onClick,
    countProduct,
    handlePlusClick,
    handleMinusClick,
  };
};