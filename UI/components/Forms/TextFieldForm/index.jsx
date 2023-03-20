import TextField from '@mui/material/TextField';
import styles from './styles.module.scss';

const TextFieldForm = () => {
  return (
    <div>
      <TextField
        id="filled-name"
        label="Фамилия Имя Отчество"
        variant="filled"
        className={styles.textField}
      />
      <TextField
        id="filled-phone"
        label="Телефон"
        variant="filled"
        className={styles.textField}
      />
      <TextField
        id="filled-email"
        label="Email"
        variant="filled"
        className={styles.textField}
      />
      <TextField
        id="filled-address"
        label="Адрес"
        variant="filled"
        className={styles.textField}
      />
      <TextField
        id="filled-comment"
        label="Комментарий к заказу"
        variant="filled"
        className={styles.textField}
      />
    </div>
  );
};

export default TextFieldForm;