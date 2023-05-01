import { useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearActiveTag } from '@/redux/slice/activeTagSlice';
import { getActiveTagSelector } from '@/redux/selectors';

export const useProductList = ({ products }) => {
  const dispatch = useDispatch();
  const activeTag = useSelector(getActiveTagSelector);

  const [activeProduct, setActiveProduct] = useState(null);

  const handleProductClick = useCallback((product) => () => {
    setActiveProduct(product);
  }, []);

  const handleAllTagClick = useCallback(() => {
    dispatch(clearActiveTag());
  }, [dispatch]);

  return {
    products,
    activeTag,
    handleAllTagClick,
    activeProduct,
    handleProductClick,
  };
};
