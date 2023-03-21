import { useState } from 'react';
import Image from 'next/image'
import { useDispatch } from 'react-redux'
import CounterButton from '@/UI/components/CounterButton';
import styles from './styles.module.scss';
import {
  addToCart,
  removeItem,
} from '@/redux/actions/cartSlice';

const ProductItem = ({
  product,
  onClick,
}) => {
  const {
    title,
    details,
    price,
    image,
  } = product;

  const dispatch = useDispatch()
  const [countProduct, setCountProduct] = useState(0);

  const handlePlusClick = () => {
    dispatch(addToCart(product));
    setCountProduct((prevState => prevState + 1));
  };

  const handleMinusClick = () => {
    dispatch(removeItem(product));
    setCountProduct((prevState => prevState - 1));
  };

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
        <CounterButton
          count={countProduct}
          handlePlusClick={handlePlusClick}
          handleMinusClick={handleMinusClick}
        />
      </div>
    </div>
  )
};

export default ProductItem;
