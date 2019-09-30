import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import './index.css';
import Patients from "./pages/Patients";
import PatientLogin from "./pages/PatientLogin";
import PatientList from "./pages/PatientList";
import Detail from "./pages/Detail";
import Login from "./pages/Welcome";
import Home from "./pages/Homepage";
import Notifications from "./pages/Notifications";
import NoMatch from "./pages/NoMatch";
import Maps from "../src/components/GoogleMap";
import Emergency from "./pages/Emergency";
import Reports from "./pages/Reports";
import Customer from "./components/Customer";
import Support from "./components/Support";
import "./normalize.css";
import "./skeleton.css";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/patients" component={Patients} />
          <Route exact path="/patients/all" component={PatientList} />
          <Route exact path="/patients/:id" component={Detail} />
          <Route exact path="/" component={Login} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/patientLogin" component={PatientLogin} />
          <Route exact path="/emergency" component={Emergency} />
          <Route exact path="/location" component={Maps} />
          <Route exact path="/reports" component={Reports} />
          <Route exact path="/notifications" component={Notifications} />
          <Route exact path="/liveChat" render={() => <Customer />} />
          <Route exact path="/support" render={() => <Support />} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
