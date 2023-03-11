import ProductItem from '@/UI/components/ProductItem';
import styles from './styles.module.scss';

const ProductList = () => (
  <section className={styles.container}>
    <ProductItem/>
    <ProductItem/>
    <ProductItem/>
    <ProductItem/>
  </section>
);

export default ProductList;
