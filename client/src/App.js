import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './index.css';
import Registration from "./pages/RegisterPage";
import UserProfile from "./pages/userProfile";
import PatientList from "./pages/PatientList";
import Detail from "./pages/Detail";
import Login from "./pages/Welcome";
import Home from "./pages/Homepage";
import Notifications from "./pages/Notifications";
import NoMatch from "./pages/NoMatch";
import Maps from "../src/components/GoogleMap";
import FooterBottom from "../src/components/Footer";
import PatientLists from "./pages/PatientList";
import Emergency from "./pages/Emergency";
import Patients from "./pages/Patients";
import Reports from "./pages/Reports";
import Customer from "./components/Customer";
import Support from "./components/Support";
import Wrapper from "../src/components/Wrapper";
import PatientLogin from "./pages/PatientLogin";
// import "./normalize.css";
// import "./skeleton.css";
// import "./App.css";
//apply to component style.css

function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/register" component={Registration} />
          <Route exact path="/patientLogin" component={PatientLogin} /> 
          <Route exact path="/patients" component={Patients} />
          <Route exact path="/profile" component={UserProfile} />
          <Route exact path="/patients/all" component={PatientLists} />
          <Route exact path="/patients/:id" component={Detail} />
          <Route exact path="/emergency" component={Emergency} />
          <Route exact path="/location" component={Maps} />
          <Route exact path="/reports" component={Reports} />
          <Route exact path="/notifications" component={Notifications} />
          <Route exact path="/liveChat" render={() => <Customer />} />
          <Route exact path="/support" render={() => <Support />} />
          <Route exact path="/" component={Login} />
          <Route component={NoMatch} />
        </Switch>
        <FooterBottom></FooterBottom>
      </div>
    </BrowserRouter>
  );
}

export default App;
