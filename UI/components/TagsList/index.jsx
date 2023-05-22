import Tag from '@/UI/components/Tag';
import { useTagsList } from './utils/useTagsList';
import styles from './styles.module.scss';

const TagsList = (props) => {
  const {
    activeTag,
    tagsList,
    onTagClick,
    onAllTagClick,
  } = useTagsList(props);

  return (
    <div className={styles.container}>
      <div className={styles.tagsList}>
        <Tag
          tagActive={activeTag}
          label="Все"
          tag={null}
          className={styles.tag}
          onClick={onAllTagClick}
        >
          Все
        </Tag>
        {tagsList?.map(({ fields }) => (
          <Tag
            key={fields.tag}
            tagActive={activeTag}
            label={fields.title}
            tag={fields.tag}
            className={styles.tag}
            onClick={onTagClick(fields.tag)}
          />
        ))}
      </div>
    </div>
  );
};

export default TagsList;
