import { useState } from 'react';
import { useDispatch } from 'react-redux'
import Image from 'next/image'
import AddProductButton from '@/UI/components/Buttons/AddProductButton';
import { addToCart, removeItem } from '@/redux/actions/cartSlice';
import styles from './styles.module.scss';

const ProductCard = ({ product }) => {
  const {
    price,
    title,
    quantity,
    image,
  } = product;
  const dispatch = useDispatch()
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
          <h3>{price} р.</h3>
          <p>{title}</p>
          <p>Черный</p>
        </div>
        <AddProductButton
          count={countProduct}
          handlePlusClick={handlePlusClick}
          handleMinusClick={handleMinusClick}
        />
        <p>Сумма: {(price * quantity).toFixed(2)} р.</p>
      </div>
    </div>
  );
};

export default ProductCard;