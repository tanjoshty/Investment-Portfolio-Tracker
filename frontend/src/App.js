import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useImmerReducer } from "use-immer";

import StateContext from "./StateContext";
import DispatchContext from "./DispatchContext";

import LoginPage from "./Pages/LoginPage";
import HomePage from "./Pages/HomePage";

const App = () => {
  const initialState = {
    loggedIn: Boolean(localStorage.getItem("portfolioToken")),
    flashMessages: [],
    user: {
      token: localStorage.getItem("portfolioToken"),
      name: localStorage.getItem("portfolioName"),
    },
  };

  function appReducer(draft, action) {
    switch (action.type) {
      case "login":
        draft.loggedIn = true;
        draft.user = action.data;
        return;
      case "logout":
        draft.loggedIn = false;
        return;
    }
  }

  const [state, dispatch] = useImmerReducer(appReducer, initialState);

  useEffect(() => {
    if (state.loggedIn) {
      localStorage.setItem("portfolioToken", state.user.token);
      localStorage.setItem("portfolioName", state.user.name);
    } else {
      localStorage.removeItem("portfolioToken");
      localStorage.removeItem("portfolioName");
    }
  }, [state.loggedIn]);

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact>
              {state.loggedIn ? <HomePage /> : <LoginPage />}
            </Route>
          </Switch>
        </BrowserRouter>
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
};

export default App;
