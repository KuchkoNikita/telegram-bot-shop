import { useState } from 'react';
import Image from 'next/image';
import { useSelector } from 'react-redux'
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import Popup from '@/UI/containers/Popup';
import Slider from '@/UI/components/Slider';
import AddProductButton from '@/UI/components/Buttons/AddProductButton';
import { getContentfulText } from '@/utils/contentfull';
import { getAllCartsSelector } from '@/redux/selectors';
import { DETAILS_ICON } from './utils/constant';
import styles from './styles.module.scss';

const ProductInformationPopup = ({
  activeProduct,
  isProductActive,
  onCloseButtonClick,
}) => {

  if (!activeProduct) {
    return null;
  }

  const cart = useSelector(getAllCartsSelector);

  const [countProduct, setCountProduct] = useState(0);
  const {
    type,
    title,
    description,
    details,
    price,
    images,
  } = activeProduct;
  const content = getContentfulText(description);
  const isImageSlider = images.length > 1;

  const handlePlusClick = () => {
    setCountProduct((prevState) => prevState + 1)
  };

  const handleMinusClick = () => {
    setCountProduct((prevState) => prevState - 1)
  };

  const handleImageChange = () => {};

  console.log('type', type);

  return (
    <Popup 
      isShowCloseButton
      className={styles.popup}
      isOpen={isProductActive}
      onCloseButtonClick={onCloseButtonClick}
    >
      <div className={styles.popupContainer}>
        <div className={styles.imageWrapper}>
          {isImageSlider 
            ? (
              <Slider
                images={images}
                imageWidth={380}
                imageHeight={380}
                onImageChange={handleImageChange}
              />
            )
            : (
              <Image
                src={images[0].src}
                alt="Picture of the author"
                width={380}
                height={380}
              />
            )
          }
        </div>
        <div className={styles.productInfo}>
          <div className={styles.productHeader}>
            <h2>{price} р.</h2>
            <AddProductButton
              count={countProduct}
              handlePlusClick={handlePlusClick}
              handleMinusClick={handleMinusClick}
            />
          </div>
          <div className={styles.productAbout}>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.productLables}>
              {details.map(({ title, text }, index) => (
                <Tooltip
                  arrow
                  key={`${title}=${text}`}
                  title={text}
                >
                  <div className={styles.productLable}>
                    {DETAILS_ICON?.[type]?.[index]}
                    <Typography className={styles.productLableText}>{title}</Typography>
                  </div>
                </Tooltip>
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

export default ProductInformationPopup;