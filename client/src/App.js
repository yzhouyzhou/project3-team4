import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './index.css';
import Register from "./pages/Register";
import UserProfile from "./pages/userProfile";
import PatientList from "./pages/PatientList";
import Detail from "./pages/Detail";
import Login from "./pages/Welcome";
import Home from "./pages/Homepage";
import Notifications from "./pages/Notifications";
import NoMatch from "./pages/NoMatch";
import Maps from "../src/components/GoogleMap";
import FooterBottom from "../src/components/Footer";
import Emergency from "./pages/Emergency";
import Reports from "./pages/Reports";
import Customer from "./components/Customer";
import Support from "./components/Support";
import Wrapper from "../src/components/Wrapper";
// import "./normalize.css";
// import "./skeleton.css";
// import "./App.css";
//apply to component style.css

function App() {
  return (
    <Router>
      <div>
        <Wrapper>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/profile" component={UserProfile} />
          <Route exact path="/patients/all" component={PatientList} />
          <Route exact path="/patients/:id" component={Detail} />
          <Route exact path="/emergency" component={Emergency} />
          <Route exact path="/location" component={Maps} />
          <Route exact path="/reports" component={Reports} />
          <Route exact path="/notifications" component={Notifications} />
          <Route exact path="/liveChat" render={() => <Customer />} />
          <Route exact path="/support" render={() => <Support />} />
          <Route component={NoMatch} />
        </Switch>
        <FooterBottom></FooterBottom>
        </Wrapper>
      </div>
    </Router>
  );
}

export default App;
