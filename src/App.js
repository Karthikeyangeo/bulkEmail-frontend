import './App.css';
import { MailForm } from './routes/MailForm';
import {  Switch, Route ,Redirect} from 'react-router-dom';
import {NotFound} from './routes/NotFound'
import { SignUp } from './routes/SignUp';
import {LogIn} from './routes/LogIn';
import {Homepage} from './routes/HomePage';
import {Broadcast} from './routes/Broadcast';
import { useEffect,useState } from 'react';
import { useHistory } from 'react-router-dom';



function App() {
  const history = useHistory();
  const [token,setToken] = useState(sessionStorage.getItem("token"))
  useEffect(()=>{
    history.listen(()=>{setToken(sessionStorage.getItem("token"))});
    console.log(`token value changed ${token}`)
  },[history])
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
          </Route> 

          <Route path="/broadcast">
            {token ? <Broadcast /> : <Redirect to ='/users/login' />}   {/* If token is not there it will direct to Login always */}         
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
