import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Dashboard from "./components/Dashboard/dashboard";
import './index.css';
import Patients from "./pages/Patients";
// import PatientLogin from "./pages/PatientLogin";
import PatientList from "./pages/PatientList";
import Detail from "./pages/Detail";
import Welcome from "./pages/Welcome";
import HomepageLogin from "./pages/Homepage";
import Notifications from "./pages/Notifications";
import NoMatch from "./pages/NoMatch";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Dashboard/>
        <Switch>
          <Route exact path="/patients" component={Patients} />
          <Route exact path="/patients/all" component={PatientList} />
          <Route exact path="/patients/:id" component={Detail} />
          <Route exact path="/welcome" component={Welcome} />
          <Route exact path="/notifications" component={Notifications} />
          <Route exact path="/" component={HomepageLogin} />
          {/* <Route exact path="/" component={PatientLogin} /> */}
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
