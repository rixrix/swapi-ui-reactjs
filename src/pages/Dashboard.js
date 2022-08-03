import React from "react";

import './App.scss';

const App = () => {
    return (
    <div className="container-fluid">
      <div className="row">
        <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
            <div className="position-sticky pt-3 sidebar-sticky">
            <ul className="nav flex-column">
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                    <span data-feather="home" className="align-text-bottom"></span>
                    Dashboard
                </a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">
                    <span data-feather="file" className="align-text-bottom"></span>
                    People
                </a>
                </li>
            </ul>

            <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted text-uppercase">
                <span>Saved reports</span>
                <a className="link-secondary" href="#" aria-label="Add a new report">
                <span data-feather="plus-circle" className="align-text-bottom"></span>
                </a>
            </h6>
            <ul className="nav flex-column mb-2">
                <li className="nav-item">
                <a className="nav-link" href="#">
                    <span data-feather="file-text" className="align-text-bottom"></span>
                    Current month
                </a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">
                    <span data-feather="file-text" className="align-text-bottom"></span>
                    Last quarter
                </a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">
                    <span data-feather="file-text" className="align-text-bottom"></span>
                    Social engagement
                </a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">
                    <span data-feather="file-text" className="align-text-bottom"></span>
                    Year-end sale
                </a>
                </li>
            </ul>
            </div>
        </nav>

        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 className="h2">Dashboard</h1>
            <div className="btn-toolbar mb-2 mb-md-0">
              <div className="btn-group me-2">
                <button type="button" className="btn btn-sm btn-outline-secondary">Share</button>
                <button type="button" className="btn btn-sm btn-outline-secondary">Export</button>
              </div>
              <button type="button" className="btn btn-sm btn-outline-secondary dropdown-toggle">
                <span data-feather="calendar" className="align-text-bottom"></span>
                This week
              </button>
            </div>
          </div>

          <h2>Section title</h2>
          <div className="table-responsive">
            <table className="table table-striped table-sm">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Header</th>
                  <th scope="col">Header</th>
                  <th scope="col">Header</th>
                  <th scope="col">Header</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1,001</td>
                  <td>random</td>
                  <td>data</td>
                  <td>placeholder</td>
                  <td>textx</td>
                </tr>
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
    );
};
export default App;
