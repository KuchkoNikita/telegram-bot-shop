import { useState } from 'react';
import ProductItem from '@/UI/components/ProductItem';
import ProductPopup from '@/UI/components/ProductPopup';
import styles from './styles.module.scss';

const ProductList = ({
  type,
  products,
}) => {
  const [activeProduct, setActiveProduct] = useState(null);

  const handleProductClick = (product) => () => {
    setActiveProduct(product);
  };

  return (
    <section className={styles.container}>
      {products.map((product) => 
        <ProductItem
          type={type}
          onClick={handleProductClick(product)}
          product={product}
        />
      )}
      <ProductPopup
        activeProduct={activeProduct}
        isProductActive={!!activeProduct}
        onCloseButtonClick={handleProductClick(null)}
      />
    </section>
  )
};

export default ProductList;
