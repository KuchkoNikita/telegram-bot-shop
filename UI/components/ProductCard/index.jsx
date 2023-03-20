import { useState } from 'react';
import Image from 'next/image'
import CounterButton from '@/UI/components/CounterButton';
import { addToCart, removeItem } from '@/redux/actions/cartSlice';
import styles from './styles.module.scss';

const ProductCard = ({ product }) => {
  console.log('product: ', product);
  const {
    price,
    title,
    quantity,
    image,
  } = product;
  const [countProduct, setCountProduct] = useState(quantity)

  const handlePlusClick = () => {
    dispatch(addToCart(product));
    setCountProduct((prevState => prevState + 1));
  };

  const handleMinusClick = () => {
    dispatch(removeItem(product));
    setCountProduct((prevState => prevState - 1));
  };

  return (
    <div className={styles.productCard}>
      <Image
        src={image.src}
        alt="Picture of the author"
        width={165}
        height={165}
      />
      <div className={styles.productCardInfo}>
        <div>
          <h3>{price}</h3>
          <p>{title}</p>
          <p>Черный</p>
        </div>
        <CounterButton
          count={countProduct}
          handlePlusClick={handlePlusClick}
          handleMinusClick={handleMinusClick}
        />
        <p>Сумма: {price}</p>
      </div>
    </div>
  );
};

export default ProductCard;