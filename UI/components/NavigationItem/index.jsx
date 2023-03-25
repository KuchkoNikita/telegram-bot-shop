import Link from 'next/link'
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import styles from './styles.module.scss';

const NavigationItem = ({ title, link, onClick }) => (
  <ListItemButton
    to={link}
    component={Link}
    className={styles.nested}
    onClick={onClick}
  >
    <ListItemText primary={title} />
  </ListItemButton>
)

export default NavigationItem