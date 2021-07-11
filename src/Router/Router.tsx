import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SignUpOrInPage from '../Pages/SignUpOrInPage/SignUpOrIn';
import { LoginPage } from '../Pages/LoginPage/LoginPage';
import SignupPage from '../Pages/SignupPage/SignupPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <SignUpOrInPage />
        </Route>
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
