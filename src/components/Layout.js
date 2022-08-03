import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <div className="container-fluid">
        <div className="row">
          <Header />
          <Sidebar />
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">{children}</main>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Layout;
