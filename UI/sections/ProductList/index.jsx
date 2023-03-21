import { useState } from 'react';
import Button from '@mui/material/Button';
import ProductItem from '@/UI/components/ProductItem';
import ProductInformationPopup from '@/UI/components/Popups/ProductInformationPopup';
import styles from './styles.module.scss';

const ProductList = ({
  products,
  tagActive,
  onAllTagClick,
}) => {
  const [activeProduct, setActiveProduct] = useState(null);

  const handleProductClick = (product) => () => {
    setActiveProduct(product);
  };

  return (
    <section>
      <div className={styles.container}>
        {products.map((product) => 
          <ProductItem
            onClick={handleProductClick(product)}
            product={product}
          />
        )}
      </div>
      {tagActive && (
        <div className={styles.buttonWrapper}>
          <Button
            variant="outlined"
            className={styles.button}
            onClick={onAllTagClick}
          >
            Показать все товары
          </Button>
        </div>
      )}
      <ProductInformationPopup
        activeProduct={activeProduct}
        isProductActive={!!activeProduct}
        onCloseButtonClick={handleProductClick(null)}
      />
    </section>
  )
};

export default ProductList;
