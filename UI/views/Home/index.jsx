import ProductList from '@/UI/sections/ProductList';
import BasketButton from '@/UI/components/Buttons/BasketButton';
import TagsList from '@/UI/components/TagsList';
import BasketPopup from '@/UI/components/Popups/BasketPopup';
import { useHome } from './utils/useHome';
import styles from './styles.module.scss';

const Home = (props) => {
  const {
    tags,
    tagActive,
    isActiveCard,
    products,
    handleTagClick,
    handleProductClick,
    handleAllTagClick,
    contenTextPopup,
  } = useHome(props);

  return (
    <main className={styles.main}>
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
