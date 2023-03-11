import React, { memo } from 'react';
import PropTypes from 'prop-types';
import dynamic from 'next/dynamic';

const MetaTags = dynamic(() => import('@/UI/components/MetaTags'));
const Header = dynamic(() => import('UI/sections/Header'));
const NavigationMenu = dynamic(() => import('UI/sections/NavigationMenu'));
const Footer = dynamic(() => import('UI/sections/Footer'));

const Layout = ({ children }) => (
  <>
    <MetaTags
      metaTitle="Create Next App"
      metaDescription="Generated by create next app"
    />
    <Header />
    {children}
    <Footer />
  </>
);

Layout.defaultProps = {
  children: null,
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default memo(Layout);
