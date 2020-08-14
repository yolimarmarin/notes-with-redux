import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import {firebase} from '../firebase/config'

const authChecker = (user) => {
  const result = user !== null;
  return result;
};

class PrivateRoute extends Component {
  state = {
    authorized: false,
    loaded: false,
  };

  componentDidMount() {
    this.checkAcces();
  }

  updateState = (state) => {
    this.setState({
      authorized: state,
      loaded: true,
    });
  };

  checkAcces = () => {
    firebase.auth().onAuthStateChanged((user) => {
      const authorized = authChecker(user);
      this.updateState(authorized);
    });
  };

  render() {
    const { component: Component, ...rest } = this.props;
    const { loaded, authorized } = this.state;
    if (!loaded) return <>Validating user</>;
    return (
      <Route
        {...rest}
        render={(props) => {
          const path = props.location.pathname
          return authorized && path !== '/' ? (
            <Component {...props} />
          ) : authorized && path === '/' ? (<Redirect
            to={{
              pathname: '/home',
            }}
          />) : (
            <Redirect
              to={{
                pathname: '/auth',
              }}
            />
          );
        }}
      />
    );
  }
}

export default PrivateRoute;
