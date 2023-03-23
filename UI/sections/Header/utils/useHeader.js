import { useState } from 'react';

export const useHeader = () => {
  const [isBurgerMenu, setIsBurgerMenu] = useState(false);

  const handleBurgerClick = () => {
    setIsBurgerMenu(!isBurgerMenu);
  }

  return {
    isBurgerMenu,
    handleBurgerClick
  };
};