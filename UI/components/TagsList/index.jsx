import Tag from '@/UI/components/Tag';
import { getContentfulFields } from '@/utils/helpers';
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

const TagsList = ({ tagsList }) => {
  return (
    <div className={styles.container}>
      {tagsList.map((tagsItem) => {
        const { tag, title } = getContentfulFields(tagsItem);

        return (
          <Tag className={styles.tag}>{title}</Tag>
        )
      })}
    </div>
  )
};

export default TagsList;