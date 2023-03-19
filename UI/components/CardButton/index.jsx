import Button from '@mui/material/Button';
import { useSelector } from 'react-redux'
import styles from './styles.module.scss';

const CardButton = ({ onClick }) => {
  const cart = useSelector((state) => state.cart.cart);
  console.log('cart: ', cart);
  const count = cart?.reduce((acc, { quantity }) => acc + quantity, 0);

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