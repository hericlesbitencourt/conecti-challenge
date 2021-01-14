import React from "react";
import { render } from "react-dom";
import App from "./containers/CompanyList";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "startbootstrap-sb-admin-2/css/sb-admin-2.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import $ from "jquery";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import './index.css';
window.jQuery = window.$ = $;
import("startbootstrap-sb-admin-2/js/sb-admin-2.min");
import("bootstrap/dist/js/bootstrap.bundle.min.js");

render(
  <div id="page-top">
    <div id="wrapper">
      <Sidebar />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <Navbar />

          <div className="container-fluid">
            <Router>
              <Switch>
                <Route path="/" exact>
                  <App />
                </Route>
              </Switch>
            </Router>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  </div>,
  document.getElementById("root")
);
