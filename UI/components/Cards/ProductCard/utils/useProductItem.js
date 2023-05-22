import { useState, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeItem } from '@/redux/slice/cartSlice';
import { getAllCartsSelector } from '@/redux/selectors';
import { findAndGetProductQuantity } from '@/utils/helpers';

export const useProductItem = ({
  product,
  onClick,
}) => {
  const {
    type, title, details, price, productOptions, oldPrice,
  } = product;
  const dispatch = useDispatch();
  const cart = useSelector(getAllCartsSelector);
  const isImageSlider = productOptions.length > 1;
  const [activeProductOption, setActiveProductOption] = useState(productOptions?.[0]);

  const findProductQuantity = useMemo(
    () => findAndGetProductQuantity(cart, activeProductOption),
    [cart, activeProductOption],
  );

  const [countProduct, setCountProduct] = useState(findProductQuantity);

  const handlePlusClick = () => {
    dispatch(addToCart({
      ...product,
      productOption: activeProductOption,
    }));
    setCountProduct(((prevState) => prevState + 1));
  };

  const handleMinusClick = () => {
    dispatch(removeItem({
      ...product,
      productOption: activeProductOption,
    }));
    setCountProduct(((prevState) => prevState - 1));
  };

  const handleProductOptionChange = (newImage) => {
    setActiveProductOption(newImage);
  };

  useEffect(() => {
    const findProductQuantity = findAndGetProductQuantity(cart, activeProductOption);

    setCountProduct(findProductQuantity);
  }, [cart, activeProductOption]);

  return {
    type,
    title,
    details,
    price,
    oldPrice,
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
