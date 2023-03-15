import Tag from '@/UI/components/Tag';
import styles from './styles.module.scss';

const TAGS = [
  'Smoant',
  'YKAP',
  'FORD',
  'Mersedes',
  '1',
  'YKAP',
  'FORD',
  'Mersedes',
  '1',
]

const TagsList = () => {

  return (
    <div className={styles.container}>
      {TAGS.map((tag) => (
        <Tag className={styles.tag}>{tag}</Tag>
      ))}
    </div>
  )
};

export default TagsList;