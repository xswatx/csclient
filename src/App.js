import React, { Component } from "react";
import Header from "./components/Layouts/Header";
import Login from "./components/Layouts/Login";
import { BrowserRouter as Router, Route} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <Route exact path="/" component={Login} />
        <Route  path="/welcome" component={Header} />
      </div>
    </Router>
    );
  }
}
export default App;
