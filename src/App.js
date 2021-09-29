import React, { Component, useEffect } from "react";
import "./App.css";
import { Provider } from "react-redux";

import store from "./store";
import Routes from "./R";
import { fetchPosts } from "./actions/postActions";

const App = () => {
  // class App extends Component {
  // render() {

  return (
    <div className="App">
      <Provider store={store}>
        <Routes />
      </Provider>
    </div>
  );
  // }
};

export default App;
