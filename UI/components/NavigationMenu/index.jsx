import Popup from '@/UI/containers/Popup';
import { NAVIGATION_MENU_ITEM } from './utils/constant';
import styles from './styles.module.scss';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const NavigationMenu = ({ isBurgerMenu, onCloseClick }) => (
  <Popup
    isShowCloseButton
    isOpen={isBurgerMenu}
    onCloseButtonClick={onCloseClick}
  >
    <div className={styles.navigationContainer}>
      <nav>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Устроиства</Typography>
          </AccordionSummary>
          <AccordionDetails>
            {NAVIGATION_MENU_ITEM.map(({ title, link }) => (
              <div
                key={`${title}-${link}`}
                className={styles.navigationWrapperItem}
              >
                <a className={styles.navigationItem} href={link}>{title}</a>
              </div>
            ))}
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Accordion 2</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </nav>
    </div>
  </Popup>
);

export default NavigationMenu;
