import Tag from '@/UI/components/Tag';
import styles from './styles.module.scss';

const TAG = [
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
      {TAG.map(() => (
        <Tag className={styles.tag}>TAG</Tag>
      ))}
    </div>
  )
};

export default TagsList;