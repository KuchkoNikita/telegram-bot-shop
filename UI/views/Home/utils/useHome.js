import { useState , useCallback, useMemo } from 'react';
import {
  createImage,
  getContentfulFields,
} from '@/utils/contentfull';

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

  const formatProducts = useMemo(() =>
    products.map((product, index) => {
      const {
        details = [],
        images,
        tag,
        ...props
      } = getContentfulFields(product);

      const newDetails = details.map((detail) => getContentfulFields(detail));

      const newImages = images.map(imageWrapper => {
        const { title, image } = getContentfulFields(imageWrapper);
        return { ...createImage(image), title };
      });

      const newTag = getContentfulFields(tag);

      return {
        ...props,
        id: index,
        tag: newTag,
        details: newDetails,
        images: newImages,
        quantity: 0,
      }
    }),
    [products]
  );

  const filterProducts = useMemo(() =>
    formatProducts.filter((formatProduct) => {
      return formatProduct?.tag.tag === tagActive;
    }),
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