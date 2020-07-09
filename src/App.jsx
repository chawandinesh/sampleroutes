import React from "react";
import "./assets/css/styles.css";
import Main from "./components/modules/Main";
import { Provider } from "react-redux";
import { store } from "./redux/store";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    );
  }
}

export default App;
