import cn from 'classnames';
import ProductLinkCard from '@/UI/components/Cards/ProductLinkCard';
import { useHome } from './utils/useHome';
import styles from './styles.module.scss';

const Home = (props) => {
  const { className, products } = useHome(props);

  return (
    <main className={cn(styles.main, className)}>
      <section>
        <div className={styles.container}>
          {products.map(({ slug, title, link, image }) => (
            <ProductLinkCard
              key={slug}
              title={title}
              link={link}
              image={image}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;
