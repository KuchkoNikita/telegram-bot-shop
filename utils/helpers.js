import { createImage, getContentfulFields, getEntriesByTypeAndSlug } from '@/utils/contentfull';
import { CONTENTFUL_CONTENT_TYPE, VIBRATION_CLICK_MILLISECONDS } from '@/utils/constants';

export const findProductInСart = (list, activeItem) => list.find(
  (listItem) => listItem?.productOption.productId === activeItem?.productId,
);

export const getQuantityInProductOption = (product) => product?.productOption.quantity || 0;

export const findAndGetProductQuantity = (list, activeItem) => getQuantityInProductOption(findProductInСart(list, activeItem));

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

  return {
    ...props,
    cardId: id,
    tag: newTag,
    details: newDetails,
    productOptions: newProductOptions,
  };
});

export const formatArrayProductsLink = (products) => products.map((product) => {
  const { image, ...productProps } = getContentfulFields(product);

  return {
    ...productProps,
    image: { ...createImage(image) },
  };
});

export const getDataProductPage = async (productType) => {
  const [page] = await getEntriesByTypeAndSlug(
    CONTENTFUL_CONTENT_TYPE.page,
    productType,
  );

  const contenTextPopup = await getEntriesByTypeAndSlug(
    CONTENTFUL_CONTENT_TYPE.text,
  );

  const { tags = [], products = [] } = getContentfulFields(page);

  const formatProducts = formatArrayProducts(products);

  return {
    tags,
    contenTextPopup,
    products: formatProducts,
  };
};

export const getDataHomePage = async (productType) => {
  const [page] = await getEntriesByTypeAndSlug(
    CONTENTFUL_CONTENT_TYPE.page,
    productType,
  );

  const { products = [] } = getContentfulFields(page);

  return {
    products: formatArrayProductsLink(products),
  };
};

export const vibrationClick = (fn) => () => {
  if (typeof window !== 'undefined') {
    window.navigator.vibrate(VIBRATION_CLICK_MILLISECONDS);
  }

  fn();
};

export const getTelegramUsername = () => {
  if (typeof window !== 'undefined') {
    const tg = window.Telegram.WebApp;
    const user = tg.initDataUnsafe?.user;

    return user?.username || '';
  }

  return '';
};
