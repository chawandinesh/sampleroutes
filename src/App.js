/**
 * App Component for the routes
 */
import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./App.css";
import AppRoutes from "./AppRoutes";
import { createBrowserHistory } from "history";
const history = createBrowserHistory();

// App Component
class App extends React.PureComponent {
  /**
   * @render to display  component on the ui
   */
  render() {
    return (
      <Router history={history}>
        {/* Links to Forward page to the specific route component */}
        <nav>
          <ul>
            <li>
              <Link to="/signin"> Sign in</Link>
            </li>
            <li>
              <Link to="/signup">Sign up</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          </ul>
        </nav>

        <AppRoutes />
      </Router>
    );
  }
}

export default App;
