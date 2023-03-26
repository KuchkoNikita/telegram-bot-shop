import { useState, useMemo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { getAllCartsSelector } from '@/redux/selectors';

export const useBasketPopup = ({
  isOpen,
  onCloseButtonClick,
  contenTextPopup,
}) => {
  const [typeTextPopup, setTypeTextPopup] = useState(null);
  const cart = useSelector(getAllCartsSelector);
 
  const totalAmountProducts = useMemo(() => 
    cart
      ?.reduce((acc, { quantity, price }) => acc + quantity * price, 0)
      .toFixed(2), 
    [cart]
  );
  
  const totalCountProducts = useMemo(
    () => cart?.reduce((acc, { quantity }) => acc + quantity, 0),
    [cart]
  );

  const handlePopupChange = useCallback((typePopup) => () => {
    setTypeTextPopup(typePopup);
  }, []);

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