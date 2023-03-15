import { useState } from 'react';
import Image from 'next/image'
import Popup from '@/UI/containers/Popup';
import CounterButton from '@/UI/components/CounterButton';
import urlImage from '@/assets/images/logo.jpeg';
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
      <div className={styles.productCard}>
        <p>bebebebe</p>
      </div>
    </Popup>
  );
};

export default CardPopup;