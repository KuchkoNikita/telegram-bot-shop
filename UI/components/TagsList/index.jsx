import Tag from '@/UI/components/Tag';
import styles from './styles.module.scss';

const TagsList = ({
  tagActive,
  tagsList,
  onTagClick,
}) => (
  <div className={styles.container}>
    <div className={styles.tagsList}>
      <Tag
        tagActive={tagActive}
        label="Все"
        tag={null}
        className={styles.tag}
        onClick={onTagClick(null)}
      >
        Все
      </Tag>
      {tagsList?.map(({ fields }) => {
        return (
          <Tag
            key={`${fields.tag}-${fields.title}`}
            tagActive={tagActive}
            label={fields.title}
            tag={fields.tag}
            className={styles.tag}
            onClick={onTagClick(fields.tag)}
          />
        )
      })}
    </div>
  </div>
);

export default TagsList;