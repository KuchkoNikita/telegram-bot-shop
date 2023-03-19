import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';

import Tag from '@/UI/components/Tag';
import styles from './styles.module.scss';

const TagsList = ({
  tagsList,
  onTagClick,
  onAllTagClick,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.tagsList}>
        <Tag
          label="Все"
          className={styles.tag}
          onClick={onAllTagClick}
        >
          Все
        </Tag>
        {tagsList?.map(({ tag, title }) => {
          return (
            <Tag
              label={title}
              className={styles.tag}
              onClick={onTagClick(tag)}
            />
          )
        })}
      </div>
    </div>
  )
};

export default TagsList;