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
    images,
  } = product;

  // Temp
  const imageArray = [
    {
      ...images[0],
      color: 'Черный'
    },
    {
      ...images[0],
      color: 'Белый'
    },
    {
      ...images[0],
      color: 'Коричневый'
    }
  ];

  const isImageSlider = imageArray.length > 1;
  const dispatch = useDispatch()
  const [countProduct, setCountProduct] = useState(0);
  const [activeImageProduct, setActiveImageProduct] = useState(imageArray?.[0]);
  console.log('activeImageProduct: ', activeImageProduct);

  const handlePlusClick = () => {
    dispatch(addToCart({ ...product, image: activeImageProduct }));
    setCountProduct((prevState => prevState + 1));
  };

  const handleMinusClick = () => {
    dispatch(removeItem({ product, image: activeImageProduct }));
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
    images: imageArray,
    onClick,
    isImageSlider,
    countProduct,
    handlePlusClick,
    handleMinusClick,
    handleImageChange,
  };
};