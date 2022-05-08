import './App.css';
import { MailForm } from './routes/MailForm';
import {  useHistory,Switch, Route } from 'react-router-dom';
import Button from '@mui/material/Button';
import {NotFound} from './routes/NotFound'
import { SignUp } from './routes/SignUp';
import {LogIn} from './routes/LogIn';



function App() {
  const history = useHistory();
  const changeURL= ()=>{history.push('/users/signup')};
 
  return (
    <div className="App">
      <Switch>
            {/* Each route is case, eg. - case '/about': */}
  
          <Route path="/mailForm">
            <MailForm />
          </Route>

          <Route path="/broadcast">
            <h1>Mail Sent Successfully</h1>
          </Route>

          <Route path='/users/signup'>
          <SignUp />
          </Route>
          <Route path='/users/login'>
          <LogIn />
          </Route>

          <Route path ="/">
            <div className="home-page-content">
              <h1>Bulk Email </h1> 
              <Button color='secondary' variant='contained' onClick={changeURL}>Enter</Button>
            </div>
          </Route>
          <Route path="**">
            <NotFound />
          </Route>

        </Switch>
    </div>
     

    
  );
}

export default App;
