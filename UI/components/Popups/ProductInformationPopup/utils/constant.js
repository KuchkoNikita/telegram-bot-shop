import cn from 'classnames';
// Pods icons
import BatteryChargingFullIcon from '@mui/icons-material/BatteryChargingFull';
import PropaneTankIcon from '@mui/icons-material/PropaneTank';
import BoltIcon from '@mui/icons-material/Bolt';
// Hookah icons
import HeightIcon from '@mui/icons-material/Height';
import ScaleIcon from '@mui/icons-material/Scale';
// E-liquid icon
import styles from '../styles.module.scss';

export const DETAILS_PODS_ICON = [
  <BatteryChargingFullIcon className={styles.icon} />,
  <PropaneTankIcon className={styles.icon} />,
  <BoltIcon className={styles.icon} />,
];

export const DETAILS_HOOKAH_ICON = [
  <HeightIcon className={styles.icon} />,
  <HeightIcon className={cn(styles.icon, styles.iconAngle)} />,
  <ScaleIcon className={styles.icon} />,
];

export const DETAILS_ICON = {
  pod: DETAILS_PODS_ICON,
  hookah: DETAILS_HOOKAH_ICON,
  'e-liquid': DETAILS_HOOKAH_ICON,
};

export const DEFAULT_ACTIVE_PRODUCT = {

};
