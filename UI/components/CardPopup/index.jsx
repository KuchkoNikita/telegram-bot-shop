import { useState } from 'react';
import Popup from '@/UI/containers/Popup';
import ProductCard from '@/UI/components/ProductCard';
import FormLabel from '@/UI/components/FormLabel';
import styles from './styles.module.scss';

const CardPopup = ({
  isOpen,
  onCloseButtonClick,
}) => {
  const [countProduct, setCountProduct] = useState(0)

  const handlePlusClick = () => {
    setCountProduct((prevState) => prevState + 1)
  }

  const handleMinusClick = () => {
    setCountProduct((prevState) => prevState - 1)
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
          <ProductCard />
          <ProductCard />
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
        <div>
          <div>Фамилия Имя Отчество</div>
          <div>Телефон</div>
          <div>Email</div>
        </div>
      </div>
    </Popup>
  );
};

export default CardPopup;