import { useState, useCallback, useMemo } from 'react';

export const useHome = ({
  tags, products, contenTextPopup, className,
}) => {
  const [isActiveCard, setIsActiveCard] = useState(false);
  const [tagActive, setTagActive] = useState(null);

  const handleProductClick = useCallback(() => {
    setIsActiveCard((prevState) => !prevState);
  }, []);

  const handleTagClick = useCallback((tag) => () => {
    setTagActive(tag);
  }, []);

  const filterProducts = useMemo(
    () => products.filter((product) => product?.tag.tag === tagActive),
    [products, tagActive],
  );

  const currentProducts = tagActive ? filterProducts : products;

  return {
    className,
    tagActive,
    isActiveCard,
    handleTagClick,
    handleProductClick,
    tags,
    products: currentProducts,
    contenTextPopup,
  };
};
