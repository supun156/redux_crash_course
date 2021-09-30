import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { Provider, useDispatch } from "react-redux";

import store from "./store";
import Posts from "./components/Posts";
import PostForm from "./PostformComponent";
import { fetchPosts } from "./actions/postActions";

const Routes = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchPosts(dispatch);
  }, []);

  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          component={() => {
            return (
              <div>
                <header className="App-header">
                  <h1 className="App-title">Welcome to React</h1>

                  <Link to={"/add"}>
                    <h3>Add post</h3>
                  </Link>
                </header>

                <hr />
                <Posts />
              </div>
            );
          }}
        />

        <Route path="/add" component={PostForm} />
      </Switch>
    </Router>
  );
};

export default Routes;
