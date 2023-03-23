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
import { TEXTFIELD_DATA, validationSchema } from './utils/constant';
import styles from './styles.module.scss';

const FeedbackForm = ({ onLinkClick, className }) => {
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
    <form className={className} onSubmit={formik.handleSubmit}>
      <FormControl>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="courier"
          name="radio-buttons-group"
        >
          <FormControlLabel 
            value="courier"
            control={<Radio classes={{ root: styles.checkbox, checked: styles.checkbox }} />}
            label="Доставка курьером по Полоцку и Новополоцку"
          />
          <FormControlLabel
            value="mail"
            control={<Radio classes={{ root: styles.checkbox, checked: styles.checkbox }} />}
            label="Доставка почтой"
          />
          <FormControlLabel
            value="europost"
            control={<Radio classes={{ root: styles.checkbox, checked: styles.checkbox }} />}
            label="Доставка европочтой"
          />
        </RadioGroup>
      </FormControl>
      <div className={styles.textFieldBlock}>
        {TEXTFIELD_DATA.map(({ id, title }) => (
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
            InputProps={{
              className: styles.textFieldInput,
            }}
            InputLabelProps={{
              classes: {
                focused: styles.textFieldLabel,
              }
            }}
          />
        ))}
      </div>
      <div>
        <FormGroup>
          <FormControlLabel
            className={styles.controlLabel}
            control={
              <Checkbox classes={{ root: styles.checkbox, checked: styles.checkbox }} />
            }
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
            className={styles.controlLabel}
            control={
              <Checkbox classes={{ root: styles.checkbox, checked: styles.checkbox }} />
            }
            label="Подтверждаю, что мне больше 18-ти лет" 
          />
        </FormGroup>
      </div>
      <p className={styles.feedbackFormText}>Для подтверждения возраста с вами через Telegram свяжется наш менеджер</p>
      <Button
          fullWidth
          type='submit'
          variant="contained"
          className={styles.button}
        >
          ОФОРМИТЬ ЗАКАЗ
        </Button>
    </form>
  );
}

export default FeedbackForm;