import {
  Route,
  Switch,
  
  BrowserRouter as Router
} from "react-router-dom";

import AuthenticationLayout from "layouts/authentication/AuthenticationLayout";
import ApplicationLayout from "layouts/application/ApplicationLayout";
import CreatorLayout from "layouts/creator/CreatorLayout";

import SignIn from "pages/application/auth/signin";
import SignUp from "pages/application/auth/signup";
import ForgotPassword from "pages/application/auth/password/forgot";
import ForgotPasswordSuccess from "pages/application/auth/password/forgot-success";
import ResetPassword from "pages/application/auth/password/reset";
import ResetPasswordSuccess from "pages/application/auth/password/reset-success";

import Home from "pages/application/home";

import User from "pages/application/user";

import Creator from "pages/application/creator";
import UserLayout from "layouts/user/UserLayout";

const ApplicationRoute = ({
  component: Component,
  layout: Layout,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout>
          <Component />
        </Layout>
      )}
    />
  );
};

export default function ApplicationPage() {
  return (
    <>
      <Router>
        <Switch>
          {/** authentication routes */}

          <ApplicationRoute
            path="/signin"
            component={SignIn}
            layout={AuthenticationLayout}
          />

          <ApplicationRoute
            path="/signup"
            component={SignUp}
            layout={AuthenticationLayout}
          />

          <ApplicationRoute
            path="/forgot-password"
            component={ForgotPassword}
            layout={AuthenticationLayout}
          />

          <ApplicationRoute
            path="/forgot-password-success"
            component={ForgotPasswordSuccess}
            layout={AuthenticationLayout}
          />

          <ApplicationRoute
            path="/reset-password"
            component={ResetPassword}
            layout={AuthenticationLayout}
          />

          <ApplicationRoute
            path="/reset-password-success"
            component={ResetPasswordSuccess}
            layout={AuthenticationLayout}
          />

          {/** application routes */}
          <ApplicationRoute
            exact
            path="/"
            component={Home}
            layout={ApplicationLayout}
          />

          {/** user routes */}
          <ApplicationPage path="/user" component={User} layout={UserLayout} />

          {/** creator routes */}
          <ApplicationRoute
            path="/creator"
            component={Creator}
            layout={CreatorLayout}
          />
        </Switch>
      </Router>
    </>
  );
}
