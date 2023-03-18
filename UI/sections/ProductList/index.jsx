import { useState } from 'react';
import ProductItem from '@/UI/components/ProductItem';
import ProductPopup from '@/UI/components/ProductPopup';
import styles from './styles.module.scss';

const ProductList = ({
  type,
  products,
}) => {
  const [activeProduct, setActiveProduct] = useState(null);

  const handleProductClick = () => {
    setActiveProduct((prevState) => !prevState);
  };

  return (
    <section className={styles.container}>
      {products.map((product) => 
        <ProductItem
          type={type}
          onClick={handleProductClick}
          product={product}
        />
      )}
      <ProductPopup
        isProductActive={activeProduct}
        onCloseButtonClick={handleProductClick}
      />
    </section>
  )
};

export default ProductList;
