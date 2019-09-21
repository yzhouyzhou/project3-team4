import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

import Patients from "./pages/Patients";
import PatientLogin from "./pages/PatientLogin";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          {/* <Route exact path="/" component={Patients} /> */}
          {/* <Route exact path="/books" component={Books} />
          <Route exact path="/books/:id" component={Detail} /> */}
          <Route exact path="/patients" component={Patients} />
          <Route exact path="/patients/:id" component={Detail} />
          <Route exact path="/" component={PatientLogin} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
