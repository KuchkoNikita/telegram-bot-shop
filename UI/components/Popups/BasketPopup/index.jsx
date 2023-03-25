import dynamic from 'next/dynamic';
import Typography from '@mui/material/Typography';
import Popup from '@/UI/containers/Popup';
import FeedbackForm from '@/UI/components/FormComponents/FeedbackForm';
import { useBasketPopup } from './utils/useBasketPopup';
import styles from './styles.module.scss';

const InformativePopup = dynamic(() => import('@/UI/components/Popups/InformativePopup'));
const BasketProductCard = dynamic(() => import('@/UI/components/Cards/BasketProductCard'));

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
        <div className={styles.popupContainer}>
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
        {contenTextPopup.map(({ fields }) => {
          return (
            <InformativePopup
              key={fields.type + fields.title}
              isOpen={typeTextPopup === fields.type}
              title={fields.title}
              text={fields.text}
              onCloseButtonClick={handlePopupChange(null)}
            />
          );
        })}
      </div>
    </Popup>
  );
};

export default BasketPopup;