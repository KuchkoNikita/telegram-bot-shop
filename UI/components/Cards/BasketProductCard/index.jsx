import Image from 'next/image'
import Typography from '@mui/material/Typography';
import AddProductButton from '@/UI/components/Buttons/AddProductButton';
import { useBasketProductCard } from './utils/useBasketProductCard';
import styles from './styles.module.scss';

const BasketProductCard = (props) => {
  const {
    price,
    title,
    quantity,
    image,
    countProduct,
    handlePlusClick,
    handleMinusClick,
  } = useBasketProductCard(props)

  return (
    <div className={styles.card}>
      <Image
        src={image.src}
        alt="Picture of the author"
        width={165}
        height={165}
      />
      <div className={styles.cardInfo}>
        <div className={styles.cardProductInfo}>
          <h4 className={styles.cardPrice}>{price} р.</h4>
          <h3 className={styles.cardTitle}>{title}</h3>
          <Typography className={styles.cardColor}>Черный</Typography>
        </div>
        <AddProductButton
          count={countProduct}
          handlePlusClick={handlePlusClick}
          handleMinusClick={handleMinusClick}
        />
        <Typography className={styles.cardTotalPrice}>
          Сумма: {(price * quantity).toFixed(2)} р.
        </Typography>
      </div>
    </div>
  );
};

export default BasketProductCard;