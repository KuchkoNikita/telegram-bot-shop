import * as yup from 'yup';
import { PHONE_REG_EXP } from '@/utils/constants';

const validationSchema = {
  name: yup
    .string()
    .required('Введите Фамилия Имя Отчество'),
  phone: yup
    .string()
    .matches(PHONE_REG_EXP, 'Некоректно введеный номер телефона')
    .required('Введите номер телефона'),
  email: yup
    .string()
    .email('Некоректно введеный email'),
  address: yup
    .string()
    .min(5, 'Должно быть больше 5 символов')
    .required('Введите адресс доставки'),
};

export const validationSchemaCourier = yup.object({ ...validationSchema });

export const validationSchemaBelpost = yup.object({
  ...validationSchema,
  index: yup
    .string()
    .matches(/^[0-9]+$/, 'В индексе могут быть только цифры')
    .min(6, 'Почтовый индекс состоит из 6 цифр')
    .max(6, 'Почтовый индекс состоит из 6 цифр')
    .required('Введите почтовый индекс'),
});

export const validationSchemaEuropost = yup.object({
  ...validationSchema,
  'address-post': yup
    .string()
    .min(5, 'Должно быть больше 5 символов')
    .required('Введите адресс доставки'),
});
