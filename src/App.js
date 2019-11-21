import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavbarNavigation from './components/NavbarNavigation';
import Principal from './pages/Principal';
import Footer from './components/Footer';


const App = () => (
  <div>
    <React.Fragment>
      <Router>
        <NavbarNavigation />
        <Switch>
          <Route exact path="/" component={Principal} />
        </Switch>
        <Footer/>
      </Router>
    </React.Fragment>
  </div>
);

export default App;
