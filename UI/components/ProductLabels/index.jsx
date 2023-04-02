import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import { DETAILS_ICON } from './utils/constant';
import styles from './styles.module.scss';

const ProductLabel = ({ helperText, title, icon }) => (
  <Tooltip
    arrow
    title={helperText}
  >
    <div className={styles.productLable}>
      {icon}
      <Typography className={styles.productLableText}>
        {title}
      </Typography>
    </div>
  </Tooltip>
);

const ProductLabels = ({ details, type }) => (
  <div className={styles.productLables}>
    <ProductLabel
      title={details.firstText}
      helperText={details.helperFirstText}
      icon={DETAILS_ICON?.[type]?.[0]}
    />
    <ProductLabel
      title={details.secondText}
      helperText={details.helperSecondText}
      icon={DETAILS_ICON?.[type]?.[1]}
    />
    {details?.thirdText
      && (
        <ProductLabel
          title={details.thirdText}
          helperText={details.helperThirdText}
          icon={DETAILS_ICON?.[type]?.[2]}
        />
      )}
  </div>
);

export default ProductLabels;
