import React from "react";
import TopNav from "./components/TopNav";
import SideNav from "./components/SideNav";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Charts from "./components/Charts";
import Dashboard from "./components/Dashboard";
import Marquee from "./components/Marquee";
import Profile from "./components/Profile";
import Profiles from "./components/Profiles";
import Settings from "./components/Settings";
import Tables from "./components/Tables";
import Wall from "./components/Wall";

function App() {
  return (
    <BrowserRouter>
      <div>
        <div id="wrapper">
          <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
            <TopNav />
            <SideNav />
          </nav>
          <div style={{backgroundColor: "white"}}>
            {/* PUT YOUR ROUTES HERE */}
            <Switch>
              <Route path="/" exact component={Dashboard} />
              <Route path="/charts" component={Charts} />
              <Route path="/settings" component={Settings} />
              <Route path="/tables" component={Tables} />
              <Route path="/wall" component={Wall} />
              <Route path="/profiles" component={Profiles} />
              <Route path="/profile/:id" component={Profile} />
              <Route path="/marquee/:text" component={Marquee} />
            </Switch>
          </div>
        </div>
      </div>
    </BrowserRouter>

  );
}


export default App;
