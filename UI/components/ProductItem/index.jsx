import Image from 'next/image'
import { useSelector, useDispatch } from 'react-redux'
import CounterButton from '@/UI/components/CounterButton';
import styles from './styles.module.scss';
import { decrement, increment } from '@/redux/actions/counterSlice';

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

  const countProduct = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  const handlePlusClick = () => {
    dispatch(increment())
  }

  const handleMinusClick = () => {
    dispatch(decrement())
  }

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
        <p className={styles.productPrice}>{price}</p>
        <p>{title}</p>
        <p>1500 mAh 5 мл.</p>
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
