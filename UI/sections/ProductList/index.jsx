import dynamic from 'next/dynamic';
import Button from '@mui/material/Button';
import ProductCard from '@/UI/components/Cards/ProductCard';
import { useProductList } from './utils/useProductList';
import styles from './styles.module.scss';

const ProductInformationPopup = dynamic(() => import('@/UI/components/Popups/ProductInformationPopup'));

const ProductList = (props) => {
  const {
    products,
    tagActive,
    onAllTagClick,
    activeProduct,
    handleProductClick
  } = useProductList(props)

  return (
    <section>
      <div className={styles.container}>
        {products.map((product) => 
          <ProductCard
            key={product.id}
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
