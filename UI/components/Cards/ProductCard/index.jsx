import Image from 'next/image'
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
    images,
    onClick,
    isImageSlider,
    countProduct,
    handlePlusClick,
    handleMinusClick,
    handleImageChange,
  } = useProductItem(props);

  return (
    <div className={styles.card}>
      {isImageSlider 
        ? (
          <Slider
            images={images}
            imageWidth={165}
            imageHeight={165}
            onClick={onClick}
            onImageChange={handleImageChange}
          />
        )
        : (
          <Image
            onClick={onClick}
            src={images[0].src}
            alt="Picture of the author"
            width={165}
            height={165}
            className={styles.cardImage}
          />
        )
      }
      <div className={styles.cardInfo}>
        <h3 className={styles.productPrice}>{price} р.</h3>
        <Typography className={styles.productTitle}>{title}</Typography>
        <Typography className={styles.productDetails}>
          <span className={styles.productDetail}>
            {details[0]?.title}
          </span>   
          <span className={styles.productDetail}>
            {details[1]?.title}
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
          )
        }
      </div>
    </div>
  )
};

export default ProductCard;
