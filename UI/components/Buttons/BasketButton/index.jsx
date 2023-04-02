import Slide from '@mui/material/Slide';
import Badge from '@mui/material/Badge';
import Button from '@mui/material/Button';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import { useBasketButton } from './utils/useBasketButton';
import styles from './styles.module.scss';

const BasketButton = (props) => {
  const { count, isShowButton, onClick } = useBasketButton(props);

  return (
    <Slide
      direction="up"
      in={isShowButton}
      mountOnEnter
      unmountOnExit
    >
      <Button
        variant="contained"
        onClick={onClick}
        className={styles.button}
      >
        <Badge
          badgeContent={count}
          classes={{ badge: styles.badge }}
        >
          <LocalMallIcon />
        </Badge>
        <span className={styles.buttonText}>КОРЗИНА</span>
      </Button>
    </Slide>
  );
};

export default BasketButton;
