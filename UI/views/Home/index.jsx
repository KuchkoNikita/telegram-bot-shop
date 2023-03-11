import TagsList from '@/Ui/components/TagsList';
import ProductList from '@/UI/sections/ProductList';
import styles from './styles.module.scss';

const Home = () => (
  <main className={styles.main}>
    <TagsList />
    <ProductList />
  </main>
);

export default Home;
