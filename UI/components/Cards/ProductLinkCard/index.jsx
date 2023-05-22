import Image from 'next/image';
import Link from 'next/link';
import Typography from '@mui/material/Typography';
import styles from './styles.module.scss';

const ProductLinkCard = ({ title, link, image }) => (
  <Link
    href={link}
    className={styles.card}
  >
    <Image
      src={image.src}
      alt="Picture of the author"
      width={165}
      height={165}
      className={styles.cardImage}
    />
    <div className={styles.cardInfo}>
      <Typography
        className={styles.productTitle}
        align="center"
      >
        {title}
      </Typography>
    </div>
  </Link>
);

export default ProductLinkCard;
