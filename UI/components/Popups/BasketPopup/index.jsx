import { useState } from 'react';
import { useSelector } from 'react-redux';
import Popup from '@/UI/containers/Popup';
import ProductCard from '@/UI/components/ProductCard';
import InformativePopup from '@/UI/components/Popups/InformativePopup';
import Form from '@/UI/components/FeedbackForm';
import { getAllCartsSelector } from '@/redux/selectorss/cartSelectors';
import styles from './styles.module.scss';

const BasketPopup = ({
  isOpen,
  onCloseButtonClick,
  contenTextPopup,
}) => {
  const [typeTextPopup, setTypeTextPopup] = useState(null);
  const cart = useSelector(getAllCartsSelector);
  const totalAmountProducts = cart
    ?.reduce((acc, { quantity, price }) => acc + quantity * price, 0)
    .toFixed(2);
  const totalCountProducts = cart?.reduce((acc, { quantity }) => acc + quantity, 0);

  
  const handlePopupChange = (typePopup) => () => {
    setTypeTextPopup(typePopup);
  }

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
        <div className={styles.productTotalInfo}>
          <h2 className={styles.productTotalAmount}>Итого {totalAmountProducts} р.</h2>
          <p>{totalCountProducts} шт.</p>
        </div>
      </div>
      <div className={styles.popupMain}>
        <p>Выберите способ доставки</p>
        <p>Доставляете осуществляется бесплатно, заказ оплачивется при получении наличными или картой</p>
        <Form
          className={styles.form}
          onLinkClick={handlePopupChange}
        />
      </div>
      {contenTextPopup.map(({ type, title, text }) => {
        return (
          <InformativePopup
            isOpen={typeTextPopup === type}
            title={title}
            text={text}
            onCloseButtonClick={handlePopupChange(null)}
          />
        );
      })}
    </Popup>
  );
};

export default BasketPopup;