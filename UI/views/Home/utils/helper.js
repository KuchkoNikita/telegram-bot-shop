
import { createImage, getContentfulFields } from '@/utils/contentfull';

export const formatArrayProducts = (products) => 
  products.map((product) => {
    const { 
      id,
      tag,
      details,
      productOptions,
      ...props
    } = getContentfulFields(product);

    const newProductOptions = productOptions.map(productOption => {
      const { slug, texture, image, id } = getContentfulFields(productOption);

      return {
        quantity: 0,
        texture,
        slug,
        productId: id,
        image: { ...createImage(image) }
      };
    });

    const newTag = getContentfulFields(tag);

    const newDetails = details.map((detail) => getContentfulFields(detail));

    return {
      ...props,
      cardId: id,
      tag: newTag,
      details: newDetails,
      productOptions: newProductOptions,
    }
  }
);