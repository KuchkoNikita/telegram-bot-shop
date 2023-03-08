import React from 'react';
import PropTypes from 'prop-types';
import * as Icons from '@/assets/svgs/index';

const Svg = ({
  type,
  className,
  handleOnClick,
  ...props
}) => (Icons[type] ? React.createElement(
  Icons[type],
  {
    className,
    onClick: handleOnClick,
    ...props,
  },
  undefined,
) : null);

Svg.defaultProps = {
  className: '',
  handleOnClick: undefined,
};

Svg.propTypes = {
  type: PropTypes.string.isRequired,
  className: PropTypes.string,
  handleOnClick: PropTypes.func,
};

export default Svg;
