import dynamic from 'next/dynamic'
import cn from 'classnames';
import ProductList from '@/UI/sections/ProductList';
import { useHome } from './utils/useHome';
import styles from './styles.module.scss';

const TagsList = dynamic(() => import('@/UI/components/TagsList'));
const BasketPopup = dynamic(() => import('@/UI/components/Popups/BasketPopup'));
const BasketButton = dynamic(() => import('@/UI/components/Buttons/BasketButton'));

const Home = (props) => {
  const {
    tags,
    className,
    tagActive,
    isActiveCard,
    products,
    handleTagClick,
    handleProductClick,
    handleAllTagClick,
    contenTextPopup,
  } = useHome(props);

  return (
    <main className={cn(styles.main, className)}>
      {/* Добавить сюда котейнер и убрать из TagsList и ProductList */}
      <TagsList
        tagActive={tagActive}
        tagsList={tags}
        onTagClick={handleTagClick}
        onAllTagClick={handleAllTagClick}
      />
      <ProductList
        tagActive={tagActive}
        products={products}
        onAllTagClick={handleAllTagClick}
      />
      <BasketButton
        count={10}
        onClick={handleProductClick}
      />
      <BasketPopup
        isOpen={isActiveCard}
        onCloseButtonClick={handleProductClick}
        contenTextPopup={contenTextPopup}
      />
    </main>
  )
};

export default Home;
