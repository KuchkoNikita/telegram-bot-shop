import cn from 'classnames';
import Image from 'next/image';
import Dropdown from '@/UI/components/Dropdown';
import styles from './styles.module.scss';

const SaleCard = ({
  description,
  priceFirst,
  priceSecond,
  sizeList,
  productList,
  images,
  className,
}) => (
  <div className={cn(styles.card, className)}>
    <div className={styles.imageWrapper}>
      <Image
        src={images[0].url}
        width={images[0].width}
        height={images[0].height}
      />
    </div>
    <div className={styles.info}>
      <div className={styles.infoHeader}>
        <div className={styles.prices}>
          <p className={styles.priceFirst}>{priceFirst}</p>
          {priceSecond && <p className={styles.priceSecond}>{priceSecond}</p>}
        </div>
        <p className={styles.promotion}>-45%</p>
      </div>
      <p className={styles.description}>{description}</p>
      <div className={cn(styles.additionalInfo, styles.additionalInfoOpen)}>
        <Dropdown dropdownList={sizeList} />
        <Dropdown dropdownList={productList} />
      </div>
    </div>
  </div>
);

export default SaleCard;
