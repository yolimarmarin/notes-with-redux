import React  from "react";
import { Switch, Redirect, Route} from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import Home from "./store/containers/Home";
import Auth from "./store/containers/Auth";
import PrivateRoute from './data/router'

const App = ({ history }) => {

  return (
    <ConnectedRouter history={history}>
      <Switch>
        <PrivateRoute exact path='/home' component={Home}/>
        <PrivateRoute exact path='/' component={Auth}/>
        <Route exact path='/auth' component={Auth}/>
        <Redirect exact to={'/'}/>
      </Switch>
    </ConnectedRouter>
  );
};

export default App;
