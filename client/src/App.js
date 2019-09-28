import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";

import Patients from "./pages/Patients";
import PatientLogin from "./pages/PatientLogin";
import PatientList from "./pages/PatientList";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Maps from "../src/components/GoogleMap";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/location" component={Maps} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
