import { useState } from 'react';
import Image from 'next/image'
import Popup from '@/UI/containers/Popup';
import CounterButton from '@/UI/components/CounterButton';
import urlImage from '@/assets/images/logo.jpeg';
import styles from './styles.module.scss';

const ProductPopup = ({
  isProductActive,
}) => {
  const [countProduct, setCountProduct] = useState(0)

  const handlePlusClick = () => {
    setCountProduct((prevState) => prevState + 1)
  }

  const handleMinusClick = () => {
    setCountProduct((prevState) => prevState - 1)
  }

  return (
    <Popup className={styles.popup} isOpen={isProductActive}>
      <div>
        <Image
          src={urlImage}
          alt="Picture of the author"
          width={380}
          height={380}
        />
      </div>
      <div className={styles.productInfo}>
        <div className={styles.productContainer}>
          <div className={styles.productHeader}>
            <p>107.9р</p>
            <CounterButton
              count={countProduct}
              handlePlusClick={handlePlusClick}
              handleMinusClick={handleMinusClick}
            >
              ДОБАВИТЬ
            </CounterButton>
          </div>
          <div>
            <h2>Vaporesso Luxe QS</h2>
            <div className={styles.productLables}>
              <div className={styles.productLable}>
                <Image
                  src={urlImage}
                  alt="Picture of the author"
                  width={15}
                  height={15}
                />
                <p className={styles.productLableText}>1000 mAh</p>
              </div>
              <div className={styles.productLable}>
                <Image
                  src={urlImage}
                  alt="Picture of the author"
                  width={15}
                  height={15}
                />
                <p className={styles.productLableText}>2 мл.</p>
              </div>
              <div className={styles.productLable}>
                <Image
                  src={urlImage}
                  alt="Picture of the author"
                  width={15}
                  height={15}
                />
                <p className={styles.productLableText}>20 Вт</p>
              </div>
            </div>
            <div className={styles.productContent}>
              <p className={styles.productText}>
                Vaporesso XROS II Kit – доработанное устройство, оснащённое встроенным аккумулятором на 1000 мАч. Индикатор на корпусе показывает уровень заряда батареи.
              </p>
              <p>
                Картридж вмещает 2 мл жидкости, и представлен в двух модификациях: на 0.8 Ом и на 1.2 Ом. Имеется система регулировки тяги, а также удобная верхняя заправка жидкостью.
              </p>
              <p className={styles.productFooterText}>
                Вы можете приобрести этот товар с бесплатной доставкой курьером по городу Минску, или почтовым отправлением по всей территории Беларуси. Просто выберите цвет товара и добавьте его в корзину, затем заполните данные для доставки и нажмите кнопку «Оформить заказ». После оформления, с вами свяжется наш менеджер.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Popup>
  );
};

export default ProductPopup;