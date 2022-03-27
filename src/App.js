import { GoogleLoginProps } from "react-google-login";
import Login from "./components/login";
import GetInvolved from "./components/getInvolved";

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';



function App() {
  return (
    <Router>
          
           <Switch>

             
               
                <Route path="/login"  component={Login} />
                <Route path="/involved"  component={GetInvolved} />
               
           </Switch>
       </Router>
    
  );
}

export default App;
