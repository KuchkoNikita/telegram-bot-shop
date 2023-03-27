import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { addToCart, removeItem } from '@/redux/slice/cartSlice';

export const useBasketProductCard = ({ product }) => {
  const {
    price,
    title,
    quantity,
    productOption,
  } = product;
  const dispatch = useDispatch()
  const [countProduct, setCountProduct] = useState(quantity)

  const handlePlusClick = () => {
    dispatch(addToCart(product));
    setCountProduct((prevState => prevState + 1));
  };

  const handleMinusClick = () => {
    dispatch(removeItem(product));
    setCountProduct((prevState => prevState - 1));
  };

  return {
    price,
    title,
    quantity,
    productOption,
    countProduct,
    handlePlusClick,
    handleMinusClick,
  };
}