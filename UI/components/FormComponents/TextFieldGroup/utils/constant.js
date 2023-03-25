const TEXTFIELD_BELPOST_DATA = [
  { id: "name", title: "Фамилия Имя Отчество" },
  { id: "phone", title: "Телефон" },
  { id: "email", title: "Email" },
  { id: "address", title: "Адрес" },
  { id: "index", title: "Индекс" },
  { id: "comment", title: "Комментарий к заказу" },
];

const TEXTFIELD_EUROPOST_DATA = [
  { id: "name", title: "Фамилия Имя Отчество" },
  { id: "phone", title: "Телефон" },
  { id: "email", title: "Email" },
  { id: "address", title: "Адрес" },
  { id: "comment", title: "Комментарий к заказу" },
];

export const TEXTFIELD_DATA = {
  courier: TEXTFIELD_EUROPOST_DATA,
  europost: TEXTFIELD_EUROPOST_DATA,
  belpost: TEXTFIELD_BELPOST_DATA,
}
