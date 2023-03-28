import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeItem } from '@/redux/slice/cartSlice';
import { getAllCartsSelector } from '@/redux/selectors';
import { findProductInСart } from './helpers'

export const useProductItem = ({
  product,
  onClick,
}) => {
  const { type, title, details, price, productOptions } = product;
  const dispatch = useDispatch();
  const cart = useSelector(getAllCartsSelector);
  const isImageSlider = productOptions.length > 1;
  const [activeProductOption, setActiveProductOption] = useState(productOptions?.[0]);

  const findProduct = findProductInСart(cart, activeProductOption);

  const [countProduct, setCountProduct] = useState(findProduct?.productOption.quantity || 0);

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

  useEffect(() => {
    const findProduct = findProductInСart(cart, activeProductOption);

    setCountProduct(findProduct?.productOption.quantity || 0)
  }, [cart, activeProductOption])

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