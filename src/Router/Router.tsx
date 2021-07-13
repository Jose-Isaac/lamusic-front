import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SignUpOrInPage from '../Pages/SignUpOrInPage/SignUpOrIn';
import { LoginPage } from '../Pages/LoginPage/LoginPage';
import SignupPage from '../Pages/SignupPage/SignupPage';
import DashboardPage from '../Pages/DashboardPage/DashboardPage';
import NewMusicPage from '../Pages/NewMusicPage/NewMusicPage';

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
        <Route exact path="/dashboard">
          <DashboardPage />
        </Route>
        <Route exact path="/music/new">
          <NewMusicPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
