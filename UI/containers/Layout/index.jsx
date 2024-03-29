import dynamic from 'next/dynamic';
import React, { memo } from 'react';
import PropTypes from 'prop-types';

const MetaTags = dynamic(() => import('@/UI/components/MetaTags'));
const Header = dynamic(() => import('UI/sections/Header'));

const Layout = ({ children, className }) => (
  <>
    <MetaTags
      metaTitle="Tochka Vape Shop"
      metaDescription="Магазин электронных сигарет, кальянов и табачной продукции"
    />
    <Header />
    {children}
  </>
);

Layout.defaultProps = {
  children: null,
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default memo(Layout);
