import cn from 'classnames';
import Typography from '@mui/material/Typography';
import Popup from '@/UI/containers/Popup';
import FeedbackForm from '@/UI/components/FormComponents/FeedbackForm';
import InformativePopup from '@/UI/components/Popups/InformativePopup';
import BasketProductCard from '@/UI/components/Cards/BasketProductCard';
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
  } = useBasketPopup(props);

  return (
    <Popup
      isShowCloseButton
      className={styles.popup}
      isOpen={isOpen}
      onCloseButtonClick={onCloseButtonClick}
    >
      <div className={styles.popupHeader}>
        <div className={cn(styles.popupContainer)}>
          <div className={styles.productCardList}>
            {cart.length
              ? cart.map((product) => (
                <BasketProductCard
                  key={product.productOption.productId}
                  product={product}
                />
              ))
              : (
                <p className={styles.popupEmptyBasket}>
                  Ваша корзина пуста
                </p>
              )}
          </div>
          <div className={styles.productTotalInfo}>
            <h2 className={styles.productTotalAmount}>
              Итого
              {' '}
              {totalAmountProducts}
              {' '}
              р.
            </h2>
            <Typography>
              {totalCountProducts}
              {' '}
              шт.
            </Typography>
          </div>
        </div>
      </div>
      <div className={styles.popupContainer}>
        <div className={styles.popupMain}>
          <Typography>Выберите способ доставки</Typography>
          <Typography>Доставляете осуществляется бесплатно, заказ оплачивется при получении наличными или картой</Typography>
          <FeedbackForm
            className={styles.form}
            onLinkClick={handlePopupChange}
          />
        </div>
      </div>
      {contenTextPopup.map(({ fields }) => (
        <InformativePopup
          key={`${fields.slug}-${fields.title}`}
          isOpen={typeTextPopup === fields.type}
          title={fields.title}
          text={fields.text}
          onCloseButtonClick={handlePopupChange(null)}
        />
      ))}
    </Popup>
  );
};

export default BasketPopup;
