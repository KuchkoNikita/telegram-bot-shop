export const findProductInСart = (list, activeItem) => 
  list.find(
    (listItem) => listItem?.productOption.productId === activeItem?.productId
  );

export const getProductId = (product) => findProduct?.productOption.quantity