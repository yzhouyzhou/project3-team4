import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Dashboard from "./components/Dashboard/dashboard";
import './index.css';
import Patients from "./pages/Patients";
import Wrapper from "./components/Wrapper";
// import PatientLogin from "./pages/PatientLogin";
import PatientList from "./pages/PatientList";
import Detail from "./pages/Detail";
import Welcome from "./pages/Welcome";
import HomepageLogin from "./pages/Homepage";
import Notifications from "./pages/Notifications";
import NoMatch from "./pages/NoMatch";
import Maps from "../src/components/GoogleMap";
import Customer from './components/Customer';
import Support from './components/Support';
import './normalize.css';
    import './skeleton.css';

import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Dashboard/>
        <Wrapper>
        <Switch>
          <Route exact path="/patients" component={Patients} />
          <Route exact path="/patients/all" component={PatientList} />
          <Route exact path="/patients/:id" component={Detail} />
          <Route exact path="/welcome" component={Welcome} />
          <Route exact path="/notifications" component={Notifications} />
          <Route exact path="/" component={HomepageLogin} />
          {/* <Route exact path="/" component={PatientLogin} /> */}
          <Route exact path="/location" component={Maps} />
          <Route exact path="/livechat" render={() => <Customer />} />
        <Route exact path="/support" render={() => <Support />} />
          <Route component={NoMatch} />
        </Switch>
        </Wrapper>
      </div>
    </Router>
  );
}

export default App;
