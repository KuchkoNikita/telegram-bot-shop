const DEFAULT_TEXTFIELD_DATA = [
  { id: 'name', title: 'Фамилия Имя Отчество' },
  { id: 'phone', title: 'Телефон' },
  { id: 'email', title: 'Email' },
  { id: 'address', title: 'Адрес' },
];

const TEXTFIELD_BELPOST_DATA = [
  ...DEFAULT_TEXTFIELD_DATA,
  { id: 'index', title: 'Индекс' },
  { id: 'comment', title: 'Комментарий к заказу' },
];

const TEXTFIELD_COURIER_DATA = [
  ...DEFAULT_TEXTFIELD_DATA,
  { id: 'comment', title: 'Комментарий к заказу' },
];

const TEXTFIELD_EUROPOST_DATA = [
  ...DEFAULT_TEXTFIELD_DATA,
  { id: 'address-post', title: 'Адрес отделения' },
  { id: 'comment', title: 'Комментарий к заказу' },
];

export const TEXTFIELD_DATA = {
  courier: TEXTFIELD_COURIER_DATA,
  europost: TEXTFIELD_EUROPOST_DATA,
  belpost: TEXTFIELD_BELPOST_DATA,
};
