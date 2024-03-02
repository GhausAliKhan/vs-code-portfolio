import React from 'react';
import PropTypes from 'prop-types';
import Sidebar from './components/sidebar/Sidebar';

const Layout = ({ children }) => (
  <div className="layout">
    <Sidebar />
    <div className="content">{children}</div>
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
