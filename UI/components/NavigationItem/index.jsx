import cn from 'classnames';
import Link from 'next/link';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import styles from './styles.module.scss';

const NavigationItem = ({ title, link, onClick, isSubItem }) => (
  <ListItemButton
    to={link}
    component={Link}
    className={styles.nested}
    onClick={onClick}
  >
    <ListItemText className={cn({ [styles.subItemText]: isSubItem })} primary={title} />
  </ListItemButton>
);

export default NavigationItem;
