import { useState } from 'react';
import ProductList from '@/UI/sections/ProductList';
import CardButton from '@/UI/components/CardButton';
import TagsList from '@/UI/components/TagsList';
import CardPopup from '@/UI/components/CardPopup';
import { getContentfulFields } from '@/utils/helpers';
import { createImage } from '@/utils/contentfull';
import styles from './styles.module.scss';

const Home = ({ page }) => {
  const {
    type,
    tags,
    products,
  } = getContentfulFields(page)
  const [isActiveCard, setIsActiveCard] = useState(false);
  const [tagActive, setTagActive] = useState();

  const newProducts = products.map((product) => {
    const {
      details,
      image,
      tag,
      ...props
    } = getContentfulFields(product);

    const newDetails = details.map((detail) => getContentfulFields(detail));
    const newImage = createImage(image)
    const newTag = getContentfulFields(tag);

    return {
      ...props,
      tag: newTag,
      details: newDetails,
      image: newImage,
    }
  })

  const handleProductClick = () => {
    setIsActiveCard((prevState) => !prevState);
  };

  const handleTagClick = (tag) => () => {
    setTagActive(tag);
  };

  const handleAllTagClick = () => {
    setTagActive(null);
  };

  return (
    <main className={styles.main}>
      <TagsList
        tagsList={tags}
        onTagClick={handleTagClick}
        onAllTagClick={handleAllTagClick}
      />
      <ProductList
        products={newProducts}
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
