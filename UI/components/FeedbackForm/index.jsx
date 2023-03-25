import { useFormik } from 'formik';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import { TYPE_TEXT_POPUP } from '@/utils/constants';
import {
  TEXTFIELD_DATA,
  RADIO_CONTROL_DATA,
  validationSchema,
} from './utils/constant';
import styles from './styles.module.scss';
import { useState } from 'react';

const FeedbackForm = ({ onLinkClick, className }) => {
  const [shippingOption, setShippingOption] = useState(RADIO_CONTROL_DATA[0].value);
  console.log('shippingOption: ', shippingOption);

  const formik = useFormik({
    initialValues: {
      name: '',
      phone: '',
      email: '',
      index: '',
      address: '',
      comment: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log('values: ', values);
    },
  });

  const handleRadioButtonChange = (event) => {
    setShippingOption(event.target.value)
  };

  return (
    <form className={className} onSubmit={formik.handleSubmit}>
      <FormControl>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue={RADIO_CONTROL_DATA[0].value}
          name="radio-buttons-group"
          onChange={handleRadioButtonChange}
        >
          {RADIO_CONTROL_DATA.map(({ value, label }) => (
            <FormControlLabel
              key={value}
              value={value}
              label={label}
              control={
                <Radio classes={{ root: styles.checkbox, checked: styles.checkbox }} />
              }
            />
          ))}
        </RadioGroup>
      </FormControl>
      <div className={styles.textFieldBlock}>
        {TEXTFIELD_DATA[shippingOption].map(({ id, title, required }) => (
          <TextField
            key={id}
            required={required}
            fullWidth
            id={id}
            label={title}
            variant="filled"
            className={styles.textField}
            value={formik.values?.[id]}
            onChange={formik.handleChange}
            error={formik.touched?.[id] && Boolean(formik.errors?.[id])}
            helperText={formik.touched?.[id] && formik.errors?.[id]}
            InputProps={{ className: styles.textFieldInput }}
            InputLabelProps={{
              classes: {
                root: styles.textFieldLabel,
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
                <span> и даю согласие на </span>
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
            label="Подтверждаю, что мне больше 18-ти лет" 
            control={
              <Checkbox classes={{ root: styles.checkbox, checked: styles.checkbox }} />
            }
          />
        </FormGroup>
      </div>
      <Typography className={styles.feedbackFormText}>
        Для подтверждения возраста с вами через Telegram свяжется наш менеджер
      </Typography>
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