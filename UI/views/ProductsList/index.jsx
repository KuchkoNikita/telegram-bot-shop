import dynamic from 'next/dynamic';
import cn from 'classnames';
import { useProductsList } from './utils/useProductsList';
import styles from './styles.module.scss';

const ProductList = dynamic(() => import('@/UI/sections/ProductList'));
const TagsList = dynamic(() => import('@/UI/components/TagsList'));
const BasketPopup = dynamic(() => import('@/UI/components/Popups/BasketPopup'));
const BasketButton = dynamic(() => import('@/UI/components/Buttons/BasketButton'));

const ProductsList = (props) => {
  const {
    tags,
    className,
    isActiveCard,
    products,
    handleProductClick,
    contenTextPopup,
  } = useProductsList(props);

  return (
    <main className={cn(styles.main, className)}>
      <TagsList tagsList={tags} />
      <ProductList products={products} />
      <BasketButton
        isShow={isActiveCard}
        onClick={handleProductClick}
      />
      <BasketPopup
        isOpen={isActiveCard}
        onCloseButtonClick={handleProductClick}
        contenTextPopup={contenTextPopup}
      />
    </main>
  );
};

export default ProductsList;
