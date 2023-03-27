import { useState , useCallback, useMemo } from 'react';
import {
  createImage,
  getContentfulFields,
} from '@/utils/contentfull';

export const useHome = ({ page, contenTextPopup, className }) => {
  console.log('page: ', page);
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
        productOptions,
        tag,
        ...props
      } = getContentfulFields(product);

      const newDetails = details.map((detail) => getContentfulFields(detail));

      const newProductOptions = productOptions.map(productOption => {
        const { slug, texture, image } = getContentfulFields(productOption);
        return { texture, slug, image: { ...createImage(image) } };
      });

      const newTag = getContentfulFields(tag);

      return {
        ...props,
        id: index,
        tag: newTag,
        details: newDetails,
        productOptions: newProductOptions,
        quantity: 0,
      }
    }),
    [products]
  );

  console.log('formatProducts', formatProducts);

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

  return { className: '' }
};