import Image from 'next/image'
import urlImage from '@/assets/images/logo.jpeg';
import { useProductItem } from './utils/useProductItem';
import styles from './styles.module.scss';

const ProductList = (props) => {
  const {} = useProductItem(props);
  
  return (
    <a href="#">
      <div className={styles.card}>
        <Image
          src={urlImage}
          alt="Picture of the author"
          width={165}
          height={165}
        />
        <div className={styles.cardInfo}>
          <p className={styles.cardPrice}>90 рублей</p>
        </div>
      </div>
    </a>
  )
};

export default ProductList;
