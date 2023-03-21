import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import IconButton from '@mui/material/IconButton';
import styles from './styles.module.scss';

const AddProductButton = ({
  count,
  handlePlusClick,
  handleMinusClick,
}) => {
  return (
    <>
      {count === 0 
        ? <Button
            variant="contained"
            onClick={handlePlusClick}
            className={styles.button}
          >
            Добавить
          </Button>
        : (
          <div className={styles.buttonsWrapper}>
            <IconButton 
              variant="text"
              onClick={handleMinusClick}
              className={styles.controllButton}
            >
              <RemoveIcon className={styles.icon} />
            </IconButton>
            <p>{count}</p>
            <IconButton
              variant="text"
              onClick={handlePlusClick}
              className={styles.controllButton}
            >
              <AddIcon className={styles.icon} />
            </IconButton>
          </div>
        )
      }
    </>
  );
}

export default AddProductButton;