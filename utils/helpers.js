export const findProductInСart = (list, activeItem) => 
  list.find(
    (listItem) => listItem?.productOption.productId === activeItem?.productId
  );

export const getQuantityInProductOption = (product) => 
  product?.productOption.quantity || 0;

export const findAndGetProductQuantity = (list, activeItem) => 
  getQuantityInProductOption(findProductInСart(list, activeItem))