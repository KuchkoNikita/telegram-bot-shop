import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import styles from './styles.module.scss';

const CounterButton = ({
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
            <Button variant="text" onClick={handleMinusClick}>
              <RemoveIcon/>
            </Button>
            <p>{count}</p>
            <Button variant="text" onClick={handlePlusClick}>
              <AddIcon/>
            </Button>
          </div>
        )
      }
    </>
  );
}

export default CounterButton;