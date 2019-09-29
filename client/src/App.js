import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './index.css';
import Patients from "./pages/Patients";
// import Wrapper from "./components/Wrapper";
import PatientLogin from "./pages/PatientLogin";
import PatientList from "./pages/PatientList";
import Detail from "./pages/Detail";
import Welcome from "./pages/Welcome";
import HomepageLogin from "./pages/Homepage";
import Notifications from "./pages/Notifications";
import NoMatch from "./pages/NoMatch";
import Maps from "./pages/Location";
import LiveChat from "./pages/LiveChat";
import Emergency from "./pages/Emergency";
import Reports from "./pages/Reports";


function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/patients" component={Patients} />
          <Route exact path="/patients/all" component={PatientList} />
          <Route exact path="/patients/:id" component={Detail} />
          <Route exact path="/welcome" component={Welcome} />
          <Route exact path="/notifications" component={Notifications} />
          <Route exact path="/" component={HomepageLogin} />
          <Route exact path="/patientLogin" component={PatientLogin} />
          <Route exact path="/location" component={Maps} />
          <Route exact path="/emergency" component={Emergency} />
          <Route exact path="/reports" component={Reports} />
          <Route exact path="/liveChat" component={LiveChat} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
