import Image from 'next/image'
import { useSelector, useDispatch } from 'react-redux'
import urlImage from '@/assets/images/logo.jpeg';
import CounterButton from '@/UI/components/CounterButton';
import { useProductItem } from './utils/useProductItem';
import styles from './styles.module.scss';
import { decrement, increment } from '@/redux/actions/counterSlice';
import { useState } from 'react';

const ProductItem = (props) => {
  const countProduct = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  // const [countProduct, setCountProduct] = useState(0)
  const {
    link,
    onClick
  } = useProductItem(props);
  
  const handlePlusClick = () => {
    // setCountProduct((prevState) => prevState + 1)
    dispatch(increment())
  }

  const handleMinusClick = () => {
    // setCountProduct((prevState) => prevState - 1)
    dispatch(decrement())
  }

  return (
    <div className={styles.card}>
      <Image
        onClick={onClick}
        src={urlImage}
        alt="Picture of the author"
        width={165}
        height={165}
      />
      <div className={styles.cardInfo}>
        <p className={styles.productPrice}>90 рублей</p>
        <p>Vaporesso Luxe X</p>
        <p>1500 mAh 5 мл.</p>
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
