import Image from 'next/image';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Slider from '@/UI/components/Slider';
import AddProductButton from '@/UI/components/Buttons/AddProductButton';
import { useProductItem } from './utils/useProductItem';
import { PRODUCTS_TYPE_FOR_VIEWING_ONLY } from './utils/constant';
import styles from './styles.module.scss';

const ProductCard = (props) => {
  const {
    type,
    title,
    details,
    price,
    oldPrice,
    productOptions,
    onClick,
    isImageSlider,
    countProduct,
    handlePlusClick,
    handleMinusClick,
    handleProductOptionChange,
  } = useProductItem(props);

  return (
    <div className={styles.card}>
      {isImageSlider
        ? (
          <Slider
            list={productOptions}
            imageWidth={165}
            imageHeight={165}
            onClick={onClick}
            onImageChange={handleProductOptionChange}
          />
        )
        : (
          <Image
            onClick={onClick}
            src={productOptions[0].image.src}
            alt="Picture of the author"
            width={165}
            height={165}
            className={styles.cardImage}
          />
        )}
      <div className={styles.cardInfo}>
        <div className={styles.productPriceWrapper}>
          <h3 className={styles.productPrice}>
            {price}
            {' '}
            р.
          </h3>
          {oldPrice && (
            <h4 className={styles.productOldPrice}>
              {oldPrice}
              {' '}
              р.
            </h4>
          )}
        </div>
        <Tooltip
          arrow
          title={title}
          enterTouchDelay={0}
        >
          <Typography
            noWrap
            className={styles.productTitle}
          >
            {title}
          </Typography>
        </Tooltip>
        <Typography className={styles.productDetails}>
          <span className={styles.productDetail}>
            {details.firstText}
          </span>
          <span className={styles.productDetail}>
            {details.secondText}
          </span>
        </Typography>
        {PRODUCTS_TYPE_FOR_VIEWING_ONLY.includes(type)
          ? (
            <Button
              variant="contained"
              className={styles.button}
            >
              Написать нам
            </Button>
          )
          : (
            <AddProductButton
              count={countProduct}
              handlePlusClick={handlePlusClick}
              handleMinusClick={handleMinusClick}
            />
          )}
      </div>
    </div>
  );
};

export default ProductCard;
