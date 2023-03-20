import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';
import styles from './styles.module.scss';

const RadioForm = () => {
  return (
    <div>
      <FormGroup>
        <FormControlLabel
          control={<Checkbox />}
          label={
            <span>
              <span>Принимаю </span>
              <span className={styles.link} onClick={handlePopupChange}>пользовательское соглашение </span>
              <span>и даю согласие на </span>
              <span className={styles.link} onClick={handlePopupChange}>обработку персональных данных</span>
            </span>
          }
        />
        <FormControlLabel
          control={<Checkbox />}
          label="Подтверждаю, что мне больше 18-ти лет" 
        />
      </FormGroup>
    </div>
  );
};

export default RadioForm;