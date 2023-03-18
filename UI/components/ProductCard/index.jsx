import { useState } from 'react';
import Image from 'next/image'
import CounterButton from '@/UI/components/CounterButton';
import urlImage from '@/assets/images/logo.jpeg';
import styles from './styles.module.scss';

const ProductCard = () => {
  const [countProduct, setCountProduct] = useState(0)

  const handlePlusClick = () => {
    setCountProduct((prevState) => prevState + 1)
  }

  const handleMinusClick = () => {
    setCountProduct((prevState) => prevState - 1)
  }

  return (
    <div className={styles.productCard}>
      <Image
        src={urlImage}
        alt="Picture of the author"
        width={165}
        height={165}
      />
      <div className={styles.productCardInfo}>
        <div>
          <h3>107.9р</h3>
          <p>Vaporesso Luxe QS</p>
          <p>Черный</p>
        </div>
        <CounterButton
          count={countProduct}
          handlePlusClick={handlePlusClick}
          handleMinusClick={handleMinusClick}
        />
        <p>Сумма: 107.9</p>
      </div>
    </div>
  );
};

export default ProductCard;