import { useState, useCallback } from 'react';

export const useProductList = ({
  products,
  tagActive,
  onAllTagClick,
}) => {
  const [activeProduct, setActiveProduct] = useState(null);

  const handleProductClick = useCallback((product) => () => {
    setActiveProduct(product);
  }, []);

  return {
    products,
    tagActive,
    onAllTagClick,
    activeProduct,
    handleProductClick
  };
}