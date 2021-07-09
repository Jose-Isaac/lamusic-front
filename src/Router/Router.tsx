import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SignupPage from '../Pages/SignupPage/SignupPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/"></Route>
        <Route exact path="/signup">
          <SignupPage></SignupPage>
        </Route>
        <Route exact path="/login"></Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
