import React from "react";
import "./App.css";
import Form from "./components";
import { Provider } from "react-redux";
import { store } from "./redux/store";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Form />
      </Provider>
    );
  }
}

export default App;
