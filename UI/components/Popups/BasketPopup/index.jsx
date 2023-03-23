import Popup from '@/UI/containers/Popup';
import Form from '@/UI/components/FeedbackForm';
import BasketProductCard from '@/UI/components/BasketProductCard';
import InformativePopup from '@/UI/components/Popups/InformativePopup';
import { useBasketPopup } from './utils/useBasketPopup';
import styles from './styles.module.scss';

const BasketPopup = (props) => {
  const {
    isOpen,
    onCloseButtonClick,
    contenTextPopup,
    typeTextPopup,
    totalAmountProducts,
    totalCountProducts,
    handlePopupChange,
  } = useBasketPopup(props)

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
            <BasketProductCard product={product} />
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