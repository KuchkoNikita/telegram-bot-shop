import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { addToCart, removeItem } from '@/redux/slice/cartSlice';

export const useProductItem = ({
  product,
  onClick,
}) => {
  const {
    type,
    title,
    details,
    price,
    images,
  } = product;

  const isImageSlider = images.length > 1;
  const dispatch = useDispatch()
  const [countProduct, setCountProduct] = useState(0);
  const [activeImageProduct, setActiveImageProduct] = useState(images?.[0]);

  const handlePlusClick = () => {
    dispatch(addToCart({ ...product, image: activeImageProduct }));
    setCountProduct((prevState => prevState + 1));
  };

  const handleMinusClick = () => {
    dispatch(removeItem({ ...product, image: activeImageProduct }));
    setCountProduct((prevState => prevState - 1));
  };

  const handleImageChange = (newImage) => {
    setActiveImageProduct(newImage);
  };

  return {
    type,
    title,
    details,
    price,
    images,
    onClick,
    isImageSlider,
    countProduct,
    handlePlusClick,
    handleMinusClick,
    handleImageChange,
  };
};