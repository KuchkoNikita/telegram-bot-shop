import { useSelector } from 'react-redux';
import { useState, useCallback, useMemo } from 'react';
import { getActiveTagSelector } from '@/redux/selectors';

export const useHome = ({
  tags, products, contenTextPopup, className,
}) => {
  const activeTag = useSelector(getActiveTagSelector);

  const [isActiveCard, setIsActiveCard] = useState(false);

  const handleProductClick = useCallback(() => {
    setIsActiveCard((prevState) => !prevState);
  }, []);

  const filterProducts = useMemo(
    () => products.filter((product) => product?.tag.tag === activeTag),
    [products, activeTag],
  );

  const currentProducts = activeTag ? filterProducts : products;

  return {
    className,
    isActiveCard,
    handleProductClick,
    tags,
    products: currentProducts,
    contenTextPopup,
  };
};
