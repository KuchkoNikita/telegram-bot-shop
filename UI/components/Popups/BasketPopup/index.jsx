import Typography from '@mui/material/Typography';
import Popup from '@/UI/containers/Popup';
import Form from '@/UI/components/FeedbackForm';
import BasketProductCard from '@/UI/components/Cards/BasketProductCard';
import InformativePopup from '@/UI/components/Popups/InformativePopup';
import { useBasketPopup } from './utils/useBasketPopup';
import styles from './styles.module.scss';

const BasketPopup = (props) => {
  const {
    cart,
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
            <BasketProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className={styles.productTotalInfo}>
          <h2 className={styles.productTotalAmount}>Итого {totalAmountProducts} р.</h2>
          <Typography>{totalCountProducts} шт.</Typography>
        </div>
      </div>
      <div className={styles.popupMain}>
        <Typography>Выберите способ доставки</Typography>
        <Typography>Доставляете осуществляется бесплатно, заказ оплачивется при получении наличными или картой</Typography>
        <Form
          className={styles.form}
          onLinkClick={handlePopupChange}
        />
      </div>
      {contenTextPopup.map(({ type, title, text }) => {
        return (
          <InformativePopup
            key={type + title}
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