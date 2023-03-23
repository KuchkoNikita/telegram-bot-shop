import { useState } from 'react';
import { useSelector } from 'react-redux';
import { getAllCartsSelector } from '@/redux/selectorss/cartSelectors';

export const useBasketPopup = ({
  isOpen,
  onCloseButtonClick,
  contenTextPopup,
}) => {
  const [typeTextPopup, setTypeTextPopup] = useState(null);
  const cart = useSelector(getAllCartsSelector);
 
  const totalAmountProducts = cart
    ?.reduce((acc, { quantity, price }) => acc + quantity * price, 0)
    .toFixed(2);
  
  const totalCountProducts = cart?.reduce((acc, { quantity }) => acc + quantity, 0);

  const handlePopupChange = (typePopup) => () => {
    setTypeTextPopup(typePopup);
  }

  return {
    cart,
    isOpen,
    onCloseButtonClick,
    contenTextPopup,
    typeTextPopup,
    totalAmountProducts,
    totalCountProducts,
    handlePopupChange,
  };
};