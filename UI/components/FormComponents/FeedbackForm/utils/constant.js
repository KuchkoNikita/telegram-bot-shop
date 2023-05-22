import * as yup from 'yup';
import { PHONE_REG_EXP } from '@/utils/constants';

export const validationSchema = yup.object({
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
  index: yup
    .number()
    .min(6, 'Почтовый индекс состоит из 6 цифр')
    .max(6, 'Почтовый индекс состоит из 6 цифр')
    .required('Введите почтовый индекс'),
});
