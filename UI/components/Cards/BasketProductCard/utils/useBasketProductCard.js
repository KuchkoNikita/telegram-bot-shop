import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { addToCart, removeItem } from '@/redux/actions/cartSlice';

export const useBasketProductCard = ({ product }) => {
  const {
    price,
    title,
    quantity,
    image,
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
    image,
    countProduct,
    handlePlusClick,
    handleMinusClick,
  };
}