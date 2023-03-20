import ProductList from '@/UI/sections/ProductList';
import CardButton from '@/UI/components/CardButton';
import TagsList from '@/UI/components/TagsList';
import CardPopup from '@/UI/components/CardPopup';
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
  } = useHome(props);

  return (
    <main className={styles.main}>
      <TagsList
        tagsList={tags}
        onTagClick={handleTagClick}
        onAllTagClick={handleAllTagClick}
      />
      <ProductList
        tagActive={tagActive}
        products={products}
        onAllTagClick={handleAllTagClick}
      />
      <CardButton
        count={10}
        onClick={handleProductClick}
      />
      <CardPopup
        isOpen={isActiveCard}
        onCloseButtonClick={handleProductClick}
      />
    </main>
  )
};

export default Home;
