import { useState , useCallback, useMemo } from 'react';
import { getContentfulFields } from '@/utils/contentfull';
import { formatArrayProducts } from './helper';

export const useHome = ({ page, contenTextPopup, className }) => {
  const { tags = [], products = [] } = getContentfulFields(page);

  const [isActiveCard, setIsActiveCard] = useState(false);
  const [tagActive, setTagActive] = useState(null);

  const handleProductClick = useCallback(() => {
    setIsActiveCard((prevState) => !prevState);
  }, []);

  const handleTagClick = useCallback((tag) => () => {
    setTagActive(tag);
  }, []);

  const formatProducts = useMemo(() => formatArrayProducts(products), [products]);

  const filterProducts = useMemo(() =>
    formatProducts.filter((formatProduct) => formatProduct?.tag.tag === tagActive),
    [formatProducts, tagActive]
  );

  const currentProducts = tagActive ? filterProducts : formatProducts;

  return {
    page,
    className,
    tagActive,
    isActiveCard,
    handleTagClick,
    handleProductClick,
    tags,
    products: currentProducts,
    contenTextPopup,
  }
};