import { createImage, getContentfulFields } from '@/utils/contentfull';

export const formatArrayProducts = (products) => products.map((product) => {
  const {
    id,
    tag,
    details,
    productOptions,
    ...props
  } = getContentfulFields(product);

  const newProductOptions = productOptions.map((productOption) => {
    const {
      slug, texture, image, id: productId,
    } = getContentfulFields(productOption);

    return {
      quantity: 0,
      texture,
      slug,
      productId,
      image: { ...createImage(image) },
    };
  });

  const newTag = getContentfulFields(tag);

  const newDetails = getContentfulFields(details);
  console.log('newDetails: ', newDetails);

  return {
    ...props,
    cardId: id,
    tag: newTag,
    details: newDetails,
    productOptions: newProductOptions,
  };
});
