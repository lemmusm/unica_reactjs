import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavbarNavigation from "./components/NavbarNavigation";
import Principal from "./pages/Principal";
import Instalaciones from "./pages/Instalaciones";
import Pacientes from "./pages/Pacientes";
import Clinica from "./pages/Clinica";
import Comodin from "./pages/Comodin";
import Footer from "./components/Footer";

const App = () => (
  <div>
    <React.Fragment>
      <Router>
        <NavbarNavigation />
        <Switch>
          <Route exact path="/" component={Principal} />
          <Route exact path="/instalaciones" component={Instalaciones} />
          <Route exact path="/pacientes" component={Pacientes} />
          <Route exact path="/clinica" component={Clinica} />
          <Route exact path="/comodin" component={Comodin} />
        </Switch>
        <Footer />
      </Router>
    </React.Fragment>
  </div>
);

export default App;
