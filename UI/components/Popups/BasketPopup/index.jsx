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
        <div>
          <p>Итого 107.9р</p>
          <p>1 шт.</p>
        </div>
      </div>
      <div className={styles.popupMain}>
        <p>Выберите способ доставки</p>
        <p>Доставляете осуществляется бесплатно, заказ оплачивется при получении наличными или картой</p>
        <Form
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