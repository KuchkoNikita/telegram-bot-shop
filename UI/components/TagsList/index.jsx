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

const TagsList = ({
  tagsList,
  onTagClick,
  onAllTagClick,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.tagsList}>
        <Tag
          className={styles.tag}
          onClick={onAllTagClick}
        >
          Все
        </Tag>
        {tagsList?.map(({ tag, title }) => {
          return (
            <Tag
              className={styles.tag}
              onClick={onTagClick(tag)}
            >
              {title}
            </Tag>
          )
        })}
      </div>
    </div>
  )
};

export default TagsList;