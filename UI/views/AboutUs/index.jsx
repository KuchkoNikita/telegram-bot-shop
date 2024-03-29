import cn from 'classnames';
import styles from './styles.module.scss';

const AboutUs = ({ className }) => (
  <main className={cn(styles.section, className)}>
    <section>
      <div className={styles.container}>
        <h1>О нас</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Perspiciatis voluptatibus soluta vel, a aut inventore,
          quos doloremque quibusdam temporibus labore facilis fugit
          commodi recusandae nisi atque sed. Numquam, porro doloribus.
        </p>
      </div>
    </section>
  </main>
);

export default AboutUs;
