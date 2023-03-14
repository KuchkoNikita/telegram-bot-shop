import ProductItem from '@/UI/components/ProductItem';
import ProductPopup from '@/UI/components/ProductPopup';
import { useState } from 'react';
import styles from './styles.module.scss';

const ProductList = () => {
  const [activeProduct, setActiveProduct] = useState(null);

  const handleProductClick = () => {
    setActiveProduct((prevState) => !prevState);
  };

  return (
    <section className={styles.container}>
      {[null, null, null, null, null, null, null, null].map(() => <ProductItem onClick={handleProductClick} />)}
      <ProductPopup isProductActive={activeProduct} />
    </section>
  )
};

export default ProductList;
