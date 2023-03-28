import Image from 'next/image';
import { useState } from 'react';
import { useDispatch } from 'react-redux'
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import Popup from '@/UI/containers/Popup';
import Slider from '@/UI/components/Slider';
import AddProductButton from '@/UI/components/Buttons/AddProductButton';
import { getContentfulText } from '@/utils/contentfull';
import { addToCart, removeItem } from '@/redux/slice/cartSlice';
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

  const {
    type,
    title,
    description,
    details,
    price,
    productOptions,
  } = activeProduct;

  const dispatch = useDispatch();

  const [activeProductOption, setActiveProductOption] = useState(productOptions?.[0]);
  const [countProduct, setCountProduct] = useState(0);
 
  const content = getContentfulText(description);
  const isImageSlider = productOptions.length > 1;

  const handlePlusClick = () => {
    setCountProduct((prevState) => prevState + 1);
    dispatch(addToCart({
      ...activeProduct,
      productOption: activeProductOption,
    }));
  };

  const handleMinusClick = () => {
    setCountProduct((prevState) => prevState - 1)
    dispatch(removeItem({ 
      ...activeProduct, 
      productOption: activeProductOption,
    }));
  };

  const handleProductOptionChange = (newImage) => {
    setActiveProductOption(newImage);
  };

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
                list={productOptions}
                imageWidth={380}
                imageHeight={380}
                onImageChange={handleProductOptionChange}
              />
            )
            : (
              <Image
                src={productOptions[0].image.src}
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
                  key={`${title}-${index}`}
                  arrow
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