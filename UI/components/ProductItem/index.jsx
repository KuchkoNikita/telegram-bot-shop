import Image from 'next/image'
import AddProductButton from '@/UI/components/Buttons/AddProductButton';
import { useProductItem } from './utils/useProductItem';
import styles from './styles.module.scss';

const ProductItem = (props) => {
  const {
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
            {details[0].title}
          </span>   
          <span className={styles.productDetail}>
            {details[1].title}
          </span>
        </p>
        <AddProductButton
          count={countProduct}
          handlePlusClick={handlePlusClick}
          handleMinusClick={handleMinusClick}
        />
      </div>
    </div>
  )
};

export default ProductItem;
