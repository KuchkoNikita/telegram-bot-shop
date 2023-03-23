import Image from 'next/image'
import AddProductButton from '@/UI/components/Buttons/AddProductButton';
import Button from '@mui/material/Button';
import { useProductItem } from './utils/useProductItem';
import { PRODUCTS_TYPE_FOR_VIEWING_ONLY } from './utils/constant';
import styles from './styles.module.scss';

const ProductCard = (props) => {
  const {
    type,
    title,
    details,
    price,
    image,
    onClick,
    countProduct,
    handlePlusClick,
    handleMinusClick,
  } = useProductItem(props);

  return (
    <div className={styles.card}>
      <Image
        onClick={onClick}
        src={image.src}
        alt="Picture of the author"
        width={165}
        height={165}
      />
      <div className={styles.cardInfo}>
        <h3 className={styles.productPrice}>{price} р.</h3>
        <p className={styles.productTitle}>{title}</p>
        <p className={styles.productDetails}>
          <span className={styles.productDetail}>
            {details[0]?.title}
          </span>   
          <span className={styles.productDetail}>
            {details[1]?.title}
          </span>
        </p>
        {PRODUCTS_TYPE_FOR_VIEWING_ONLY.includes(type) 
          ? (
            <Button
              variant="contained"
              className={styles.button}
            >
              Написать нам
            </Button>
          )
          : (
            <AddProductButton
              count={countProduct}
              handlePlusClick={handlePlusClick}
              handleMinusClick={handleMinusClick}
            />
          )
        }
      </div>
    </div>
  )
};

export default ProductCard;
