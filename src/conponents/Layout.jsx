import React from 'react';
import MyNavBar from './MyNavBar';
import Background from './Background';

const Layout = ({ children }) => {
  return (
    <div>
      <MyNavBar />
      {children}
      <Background />
    </div>
  );
};

export default Layout;
