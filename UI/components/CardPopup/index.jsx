import { useSelector } from 'react-redux'
import Popup from '@/UI/containers/Popup';
import ProductCard from '@/UI/components/ProductCard';
import FormLabel from '@/UI/components/FormLabel';
import styles from './styles.module.scss';

const CardPopup = ({
  isOpen,
  onCloseButtonClick,
}) => {
  const cart = useSelector((state) => state.cart.cart);
  console.log('cart: ', cart);

  return (
    <Popup 
      isShowCloseButton
      className={styles.popup}
      isOpen={isOpen}
      onCloseButtonClick={onCloseButtonClick}
    >
      <div className={styles.popupHeader}>
        <div className={styles.productCardList}>
          {cart.map((product) => (
            <ProductCard product={product} />
          ))}
        </div>
        <div>
          <p>Итого 107.9р</p>
          <p>1 шт.</p>
        </div>
      </div>
      <div className={styles.popupMain}>
        <p>Выберите способ доставки</p>
        <p>Доставляете осуществляется бесплатно, заказ оплачивется при получении наличными или картой</p>
        <FormLabel />
        
      </div>
    </Popup>
  );
};

export default CardPopup;