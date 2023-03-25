import { useState } from 'react';
import {
  createImage,
  getContentfulFields,
  getContentfulText,
} from '@/utils/contentfull';

export const useHome = ({ page, contenTextPopup }) => {
  const { tags = [], products = [] } = getContentfulFields(page);

  const [isActiveCard, setIsActiveCard] = useState(false);
  const [tagActive, setTagActive] = useState(null);

  const handleProductClick = () => {
    setIsActiveCard((prevState) => !prevState);
  };

  const handleTagClick = (tag) => () => {
    setTagActive(tag);
  };

  const handleAllTagClick = () => {
    setTagActive(null);
  };

  const formatProducts = products.map((product, index) => {
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
    }
  });

  const formatTags = tags?.map((tagsItem) => {
    return getContentfulFields(tagsItem);
  })

  const filterProducts = 
    formatProducts.filter((formatProduct) => {
      return formatProduct?.tag.tag === tagActive;
    })

  const currentProducts = tagActive ? filterProducts : formatProducts;

  const contentPopup = contenTextPopup.map((content) => {
    const { text, ...props } = getContentfulFields(content);

    return {
      ...props,
      text: getContentfulText(text),
    }
  });

  return {
    page,
    tagActive,
    isActiveCard,
    handleTagClick,
    handleProductClick,
    handleAllTagClick,
    tags: formatTags,
    products: currentProducts,
    contenTextPopup: contentPopup,
  }
};