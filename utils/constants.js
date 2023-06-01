export const VIBRATION_CLICK_MILLISECONDS = 20;

export const PHONE_REG_EXP = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;

export const SVG_IMAGES_TYPES = {
  logo: 'logo',
};

export const CONTENTFUL_CONTENT_TYPE = {
  text: 'text',
  page: 'page',
  product: 'product',
};

export const CONTENTFUL_PRODUCT_TYPE = {
  home: 'home',
  pod: 'pod',
  hookah: 'hookah',
  eLiquid: 'e-liquid',
};

export const TYPE_TEXT_POPUP = {
  termsOfUse: 'termsOfUse',
  privacyPolicy: 'privacyPolicy',
};

export const RADIO_CONTROL_VALUE = {
  courier: 'courier',
  belpost: 'belpost',
  europost: 'europost',
};

export const RADIO_CONTROL_DATA = [
  {
    value: RADIO_CONTROL_VALUE.courier,
    label: 'Доставка курьером по Полоцку и Новополоцку',
  },
  {
    value: RADIO_CONTROL_VALUE.belpost,
    label: 'Доставка почтой',
  },
  {
    value: RADIO_CONTROL_VALUE.europost,
    label: 'Доставка европочтой',
  },
];
