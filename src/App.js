import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavbarNavigation from './components/NavbarNavigation';
import Layout from './components/Layout';
import Principal from './pages/Principal';


const App = () => (
  <div>
    <React.Fragment>
      <Router>
        <NavbarNavigation />
        <Layout>
          <Switch>
            <Route exact path="/" component={Principal} />
          </Switch>
        </Layout>
      </Router>
    </React.Fragment>
  </div>
);

export default App;
