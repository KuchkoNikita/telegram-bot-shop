import Tag from '@/UI/components/Tag';
import styles from './styles.module.scss';

const TagsList = ({
  tagActive,
  tagsList,
  onTagClick,
  onAllTagClick,
}) => (
  <div className={styles.container}>
    <div className={styles.tagsList}>
      <Tag
        tagActive={tagActive}
        label="Все"
        tag={null}
        className={styles.tag}
        onClick={onAllTagClick}
      >
        Все
      </Tag>
      {tagsList?.map(({ tag, title }) => {
        return (
          <Tag
            key={`${tag}-${title}`}
            tagActive={tagActive}
            label={title}
            tag={tag}
            className={styles.tag}
            onClick={onTagClick(tag)}
          />
        )
      })}
    </div>
  </div>
);

export default TagsList;