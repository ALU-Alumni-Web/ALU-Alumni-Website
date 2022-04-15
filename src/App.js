import { GoogleLoginProps } from "react-google-login";
import Login from "./components/Authentication/login";
import GetInvolved from "./components/GetInvolved/getInvolved";
import Home from '../src/components/Home/Home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/login" exact={true} component={Login} />
        <Route path="/involved" exact={true} component={GetInvolved} />
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;