import './App.scss';

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";

import Layout from './components/Layout';
import Home from './pages/Home';
import Error from './pages/Error';

import People from './components/People';
import Planets from './components/Planets';
import Species from './components/Species';
import Vehicles from './components/Vehicles';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/people" element={<People />} />
          <Route path="/species" element={<Species />} />
          <Route path="/planets" element={<Planets />} />
          <Route path="/vehicles" element={<Vehicles />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Layout>
    </Router>
  );
};
export default App;
