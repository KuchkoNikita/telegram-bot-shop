import { useState } from 'react';
import ProductList from '@/UI/sections/ProductList';
import CardButton from '@/UI/components/CardButton';
import TagsList from '@/UI/components/TagsList';
import CardPopup from '@/UI/components/CardPopup';
import styles from './styles.module.scss';

const Home = ({ page }) => {
  console.log('page: ', page);
  const [isActiveCard, setIsActiveCard] = useState(false);

  const handleProductClick = () => {
    setIsActiveCard((prevState) => !prevState);
  };

  return (
    <main className={styles.main}>
      <TagsList />
      <ProductList />
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
