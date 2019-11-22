import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavbarNavigation from "./components/NavbarNavigation";
import Principal from "./pages/Principal";
import Instalaciones from "./pages/Instalaciones";
import Footer from "./components/Footer";

const App = () => (
  <div>
    <React.Fragment>
      <Router>
        <NavbarNavigation />
        <Switch>
          <Route exact path="/" component={Principal} />
          <Route exact path="/instalaciones" component={Instalaciones} />
        </Switch>
        <Footer />
      </Router>
    </React.Fragment>
  </div>
);

export default App;
