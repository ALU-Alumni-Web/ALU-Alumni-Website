import { GoogleLoginProps } from "react-google-login";
import Login from "./components/Authentication/login";
import GetInvolved from "./components/GetInvolved/getInvolved";
import Home from '../src/components/Home/Home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/login" exact={true} component={Login} />
        <Route path="/involved" exact={true} component={GetInvolved} />
      </Switch>
    </Router>
  );
}

export default App;