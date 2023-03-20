import { useState } from 'react';
import { useSelector } from 'react-redux';

import Popup from '@/UI/containers/Popup';
import ProductCard from '@/UI/components/ProductCard';
import Button from '@mui/material/Button';
import TextPopup from '@/UI/components/TextPopup';
import RadioForm from '@/UI/components/Forms/RadioForm';
import TextFieldForm from '@/UI/components/Forms/TextFieldForm';
import CheckboxForm from '@/UI/components/Forms/CheckboxForm';

import styles from './styles.module.scss';

const CardPopup = ({
  isOpen,
  onCloseButtonClick,
}) => {
  const [isOpenPopup, setIsOpenPopup] = useState(false);
  const cart = useSelector((state) => state.cart.cart);
  
  const handlePopupChange = () => {
    setIsOpenPopup((prevState) => !prevState);
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
        <RadioForm />
        <TextFieldForm />
        <CheckboxForm />
        <p>Для подтверждения возраста с вами через Telegram свяжется наш менеджер</p>
        <Button
          variant="contained"
          className={styles.button}
        >
          ОФОРМИТЬ ЗАКАЗ
        </Button>
      </div>
      <TextPopup
        isOpen={isOpenPopup}
        onCloseButtonClick={handlePopupChange}
      />
    </Popup>
  );
};

export default CardPopup;