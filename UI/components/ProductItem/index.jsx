import Image from 'next/image'
import urlImage from '@/assets/images/logo.jpeg';
import styles from './styles.module.scss';

const ProductList = ({
  link,
}) => (
  <div className={styles.card}>
    <a href="#">
      <Image
        src={urlImage}
        alt="Picture of the author"
        width={120}
        height={120}
      />
      <div className={styles.cardInfo}>
        <p className={styles.cardPrice}>90 рублей</p>
      </div>
    </a>
  </div>
);

export default ProductList;
