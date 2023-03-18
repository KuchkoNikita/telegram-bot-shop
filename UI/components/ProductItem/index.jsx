import Image from 'next/image'
import { useSelector, useDispatch } from 'react-redux'
import urlImage from '@/assets/images/logo.jpeg';
import CounterButton from '@/UI/components/CounterButton';
import { getContentfulFields } from '@/utils/helpers';
import styles from './styles.module.scss';
import { decrement, increment } from '@/redux/actions/counterSlice';

const ProductItem = ({
  product,
  onClick,
}) => {
  const {
    title,
    description,
    details,
    price,
    image,
  } = getContentfulFields(product);
  const { url } = image.fields.file
  console.log('product: ', product);

  const countProduct = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  // const [countProduct, setCountProduct] = useState(0)
  
  const handlePlusClick = () => {
    // setCountProduct((prevState) => prevState + 1)
    dispatch(increment())
  }

  const handleMinusClick = () => {
    // setCountProduct((prevState) => prevState - 1)
    dispatch(decrement())
  }

  console.log("URL", "http:"+url);

  return (
    <div className={styles.card}>
      <Image
        onClick={onClick}
        src={"http:"+url}
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
