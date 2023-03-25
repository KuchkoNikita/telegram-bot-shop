import * as yup from 'yup';
import { PHONE_REG_EXP } from '@/utils/constants';

const TEXTFIELD_BELPOST_DATA = [
  {
    id: "name",
    title: "Фамилия Имя Отчество",
    required: true,
  },
  {
    id: "phone",
    title: "Телефон",
    required: true,
  },
  {
    id: "email",
    title: "Email",
    required: false,
  },
  {
    id: "address",
    title: "Адрес",
    required: true,
  },
  {
    id: "index",
    title: "Индекс",
    required: true,
  },
  {
    id: "comment",
    title: "Комментарий к заказу",
    required: false,
  },
];

const TEXTFIELD_EUROPOST_DATA = [
  {
    id: "name",
    title: "Фамилия Имя Отчество",
    required: true,
  },
  {
    id: "phone",
    title: "Телефон",
    required: true,
  },
  {
    id: "email",
    title: "Email",
    required: false,
  },
  {
    id: "address",
    title: "Адрес",
    required: true,
  },
  {
    id: "comment",
    title: "Комментарий к заказу",
    required: false,
  },
];

export const RADIO_CONTROL_DATA = [
  {
    value: 'courier',
    label: "Доставка курьером по Полоцку и Новополоцку",
  },
  {
    value: 'belpost',
    label: "Доставка почтой",
  },
  {
    value: 'europost',
    label: "Доставка европочтой",
  },
]

export const TEXTFIELD_DATA = {
  courier: TEXTFIELD_EUROPOST_DATA,
  europost: TEXTFIELD_EUROPOST_DATA,
  belpost: TEXTFIELD_BELPOST_DATA,
}

export const validationSchema = yup.object({
  name: yup
    .string('Введите своё Фамилию Имя Отчество')
    // .email('Enter a valid email')
    .required('Email is required'),
  phone: yup
    .string()
    .matches(PHONE_REG_EXP, 'Phone number is not valid')
    .required('Password is required'),
});