import './App.css';
import { MailForm } from './routes/MailForm';
import {  Switch, Route ,Redirect} from 'react-router-dom';
import {NotFound} from './routes/NotFound'
import { SignUp } from './routes/SignUp';
import {LogIn} from './routes/LogIn';
import {Homepage} from './routes/HomePage';
import {Broadcast} from './routes/Broadcast';



function App() {
  
  const token=sessionStorage.getItem("token");
  return (
    <div className="App">
      <Switch>
            {/* Each route is case, eg. - case '/about': */}
  
          <Route path='/users/signup'>
          <SignUp />
          </Route>

          <Route path='/users/login'>
          <LogIn />
          </Route>

          <Route exact path="/mailForm">
            <MailForm />
            {/* {token ? <MailForm /> : <Redirect to ='/users/login'/>}   If token is not there it will direct to Login always */}
          </Route> 

          <Route path="/broadcast">
            {token ? <Broadcast /> : <Redirect to ='/users/login'/>}   {/* If token is not there it will direct to Login always */}         
          </Route>

          
          <Route path ="/">
            {token ? <MailForm /> : <Homepage />}   {/* If token is there it will direct to Mailform always */}
          </Route>
          <Route path="**">
            <NotFound />
          </Route>

        </Switch>
    </div>
     

    
  );
}

export default App;
