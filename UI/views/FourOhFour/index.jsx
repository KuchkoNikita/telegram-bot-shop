import Link from 'next/link';
import { Roboto } from '@next/font/google';
import styles from './styles.module.scss';

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export default function FourOhFour() {
  return (
    <main className={roboto.className}>
      <div className={styles.container}>
        <h1 className={styles.title}>404 - Страница не найдена</h1>
        <Link href="/" className={styles.link}>
          Перейти в каталог
        </Link>
      </div>
    </main>
  );
}
