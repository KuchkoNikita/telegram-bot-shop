import * as yup from 'yup';
import { useFormik } from 'formik';

import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import { TYPE_TEXT_POPUP } from '@/utils/constants';

import styles from './styles.module.scss';

const TEXT_INPUT = [
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

const validationSchema = yup.object({
  name: yup
    .string('Enter your email')
    // .email('Enter a valid email')
    .required('Email is required'),
  phone: yup
    .string('Enter your password')
    // .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});

const Form = ({ onLinkClick }) => {
  const formik = useFormik({
    initialValues: {
      name: '',
      phone: '',
      email: '',
      address: '',
      comment: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log('values: ', values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <FormControl>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="courier"
          name="radio-buttons-group"
        >
          <FormControlLabel 
            value="courier"
            control={<Radio />}
            label="Доставка курьером по Полоцку и Новополоцку"
          />
          <FormControlLabel
            value="mail"
            control={<Radio />}
            label="Доставка почтой"
          />
          <FormControlLabel
            value="europost"
            control={<Radio />}
            label="Доставка европочтой"
          />
        </RadioGroup>
      </FormControl>
      <div>
        {TEXT_INPUT.map(({ id, title }) => (
          <TextField
            fullWidth
            id={id}
            label={title}
            variant="filled"
            className={styles.textField}
            value={formik.values?.[id]}
            onChange={formik.handleChange}
            error={formik.touched?.[id] && Boolean(formik.errors?.[id])}
            helperText={formik.touched?.[id] && formik.errors?.[id]}
          />
        ))}
      </div>
      <div>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox />}
            label={
              <span>
                <span>Принимаю </span>
                <span
                  className={styles.link}
                  onClick={onLinkClick(TYPE_TEXT_POPUP.privacyPolicy)}
                >
                  пользовательское соглашение 
                </span>
                <span>и даю согласие на </span>
                <span
                  className={styles.link}
                  onClick={onLinkClick(TYPE_TEXT_POPUP.termsOfUse)}
                >
                  обработку персональных данных
                </span>
              </span>
            }
          />
          <FormControlLabel
            control={<Checkbox />}
            label="Подтверждаю, что мне больше 18-ти лет" 
          />
        </FormGroup>
      </div>
      <p>Для подтверждения возраста с вами через Telegram свяжется наш менеджер</p>
      <Button
          type='submit'
          variant="contained"
          className={styles.button}
        >
          ОФОРМИТЬ ЗАКАЗ
        </Button>
    </form>
  );
}

export default Form;