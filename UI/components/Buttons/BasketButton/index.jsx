import Button from '@mui/material/Button';
import { useBasketButton } from './utils/useBasketButton';
import styles from './styles.module.scss';

const BasketButton = (props) => {
  const { count, onClick } = useBasketButton(props)

  return (
    <>
      {count ? (
        <Button
          variant="contained"
          onClick={onClick}
          className={styles.button}
        >
          Купить {count}
        </Button>
      ) : null}
    </>
  )
};

export default BasketButton;