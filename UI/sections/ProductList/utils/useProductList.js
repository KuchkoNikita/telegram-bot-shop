import { useState } from 'react';

export const useProductList = ({
  products,
  tagActive,
  onAllTagClick,
}) => {
  const [activeProduct, setActiveProduct] = useState(null);

  const handleProductClick = (product) => () => {
    setActiveProduct(product);
  };

  return {
    products,
    tagActive,
    onAllTagClick,
    activeProduct,
    handleProductClick
  };
}