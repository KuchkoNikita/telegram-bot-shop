import Image from 'next/image'
import urlImage from '@/assets/images/logo.jpeg';
import CounterButton from '@/UI/components/CounterButton';
import { useProductItem } from './utils/useProductItem';
import styles from './styles.module.scss';
import { useState } from 'react';

const ProductItem = (props) => {
  const [countProduct, setCountProduct] = useState(0)
  const {
    link,
    onClick
  } = useProductItem(props);
  
  const handlePlusClick = () => {
    setCountProduct((prevState) => prevState + 1)
  }

  const handleMinusClick = () => {
    setCountProduct((prevState) => prevState - 1)
  }

  return (
    <div className={styles.card} onClick={onClick}>
      <Image
        src={urlImage}
        alt="Picture of the author"
        width={165}
        height={165}
      />
      <div className={styles.cardInfo}>
        <p className={styles.productPrice}>90 рублей</p>
        <CounterButton
          count={countProduct}
          handlePlusClick={handlePlusClick}
          handleMinusClick={handleMinusClick}
        >
          Добавить
        </CounterButton>
      </div>
    </div>
  )
};

export default ProductItem;
