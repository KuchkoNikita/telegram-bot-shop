import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import NavigationItem from '@/UI/components/NavigationItem';

const NavigationSubMenu = ({
  title,
  list,
  isOpen,
  onClick,
  onCloseClick,
}) => (
  <>
    <ListItemButton onClick={onClick}>
      <ListItemText primary={title} />
      {isOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
    </ListItemButton>
    <Collapse
      in={isOpen}
      timeout="auto"
      unmountOnExit
    >
      <List
        component="div"
        disablePadding
      >
        {list.map(({ title, link }) => (
          <NavigationItem
            isSubItem
            key={`${title}-${link}`}
            title={title}
            link={link}
            onClick={onCloseClick}
          />
        ))}
      </List>
    </Collapse>
  </>
);

export default NavigationSubMenu;
