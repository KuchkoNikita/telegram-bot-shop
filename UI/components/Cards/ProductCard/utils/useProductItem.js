import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeItem } from '@/redux/slice/cartSlice';
import { getAllCartsSelector } from '@/redux/selectors';

export const useProductItem = ({
  product,
  onClick,
}) => {
  const { type, title, details, price, productOptions } = product;
  const dispatch = useDispatch();
  const cart = useSelector(getAllCartsSelector);
  const isImageSlider = productOptions.length > 1;
  const [activeProductOption, setActiveProductOption] = useState(productOptions?.[0]);

  const temp = cart.find(
    (productСart) => productСart.productOption.productId === activeProductOption.productId
  );

  const [countProduct, setCountProduct] = useState(0);

  const handlePlusClick = () => {
    dispatch(addToCart({
      ...product,
      productOption: activeProductOption,
    }));
    setCountProduct((prevState => prevState + 1));
  };

  const handleMinusClick = () => {
    dispatch(removeItem({ 
      ...product, 
      productOption: activeProductOption,
    }));
    setCountProduct((prevState => prevState - 1));
  };

  const handleProductOptionChange = (newImage) => {
    setActiveProductOption(newImage);
  };

  return {
    type,
    title,
    details,
    price,
    productOptions,
    onClick,
    isImageSlider,
    countProduct,
    handlePlusClick,
    handleMinusClick,
    activeProductOption,
    handleProductOptionChange,
  };
};