import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { LoginPage } from '../Pages/LoginPage/LoginPage';
import SignupPage from '../Pages/SignupPage/SignupPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/"></Route>
        <Route exact path="/signup">
          <SignupPage />
        </Route>
        <Route exact path="/login">
          <LoginPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
