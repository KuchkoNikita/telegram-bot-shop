import Button from '@mui/material/Button';
import styles from './styles.module.scss';

const CardButton = ({ count, onClick }) => {
  return (
    <Button
      variant="contained"
      onClick={onClick}
      className={styles.button}
    >
      Купить {count}
    </Button>
  )
};

export default CardButton;