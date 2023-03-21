import * as yup from 'yup';

export const TEXTFIELD_DATA = [
  {
    id: "name",
    title: "Фамилия Имя Отчество",
  },
  {
    id: "phone",
    title: "Телефон",
  },
  {
    id: "email",
    title: "Email",
  },
  {
    id: "address",
    title: "Адрес",
  },
  {
    id: "comment",
    title: "Комментарий к заказу"
  },
];

export const validationSchema = yup.object({
  name: yup
    .string('Enter your email')
    // .email('Enter a valid email')
    .required('Email is required'),
  phone: yup
    .string('Enter your password')
    // .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});