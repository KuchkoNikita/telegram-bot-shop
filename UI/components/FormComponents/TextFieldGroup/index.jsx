import cn from 'classnames';
import TextField from '@mui/material/TextField';
import { TEXTFIELD_DATA } from './utils/constant';
import styles from './styles.module.scss';

const TextFieldGroup = ({ formik, shippingOption, className }) => (
  <div className={cn(styles.textFieldBlock, className)}>
    {TEXTFIELD_DATA[shippingOption].map(({ id, title }) => (
      <TextField
        key={id}
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
          },
        }}
      />
    ))}
  </div>
);

export default TextFieldGroup;
