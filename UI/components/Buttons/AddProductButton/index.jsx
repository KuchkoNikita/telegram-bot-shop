import cn from 'classnames';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useAddProductButton } from './utils/useAddProductButton';
import styles from './styles.module.scss';

const AddProductButton = (props) => {
  const {
    count,
    handlePlusClick,
    handleMinusClick,
  } = useAddProductButton(props);

  if (count === 0) {
    return (
      <Button
        variant="contained"
        onClick={handlePlusClick}
        className={styles.button}
      >
        <ShoppingCartIcon className={cn(styles.iconCart, styles.icon)} />
        <span>Добавить</span>
      </Button>
    );
  }

  return (
    <div className={styles.buttonsWrapper}>
      <IconButton
        variant="text"
        onClick={handleMinusClick}
        className={styles.controllButton}
      >
        <RemoveIcon className={styles.icon} />
      </IconButton>
      <Typography>{count}</Typography>
      <IconButton
        variant="text"
        onClick={handlePlusClick}
        className={styles.controllButton}
      >
        <AddIcon className={styles.icon} />
      </IconButton>
    </div>
  );
};

export default AddProductButton;
