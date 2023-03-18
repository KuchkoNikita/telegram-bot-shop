import { useState } from 'react';
import Image from 'next/image'
import Popup from '@/UI/containers/Popup';
import CounterButton from '@/UI/components/CounterButton';
import urlImage from '@/assets/images/logo.jpeg';
import { getContentfulText } from '@/utils/contentfull';
import styles from './styles.module.scss';

const ProductPopup = ({
  activeProduct,
  isProductActive,
  onCloseButtonClick,
}) => {

  if (!activeProduct) {
    return null;
  }

  const [countProduct, setCountProduct] = useState(0)
  const {
    title,
    description,
    details,
    price,
    image,
  } = activeProduct;
  const content = getContentfulText(description);

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
      isOpen={isProductActive}
      onCloseButtonClick={onCloseButtonClick}
    >
      <div className={styles.imageWrapper}>
        <Image
          src={image.src}
          alt="Picture of the author"
          width={380}
          height={380}
        />
      </div>
      <div className={styles.productInfo}>
        <div className={styles.productContainer}>
          <div className={styles.productHeader}>
            <p>{price}</p>
            <CounterButton
              count={countProduct}
              handlePlusClick={handlePlusClick}
              handleMinusClick={handleMinusClick}
            />
          </div>
          <div className={styles.productAbout}>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.productLables}>
              {details.map(({ title }) => (
                <div className={styles.productLable}>
                  <Image
                    src={urlImage}
                    alt="Picture of the author"
                    width={15}
                    height={15}
                  />
                  <p className={styles.productLableText}>{title}</p>
                </div>
              ))}
            </div>
            <div className={styles.productContent}>
              {content}
            </div>
          </div>
        </div>
      </div>
    </Popup>
  );
};

export default ProductPopup;