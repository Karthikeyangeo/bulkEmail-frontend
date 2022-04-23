import './App.css';
import { MailForm } from './routes/MailForm';
import {  useHistory,Switch, Route } from 'react-router-dom';
import Button from '@mui/material/Button';
import {NotFound} from './routes/NotFound'
import { useEffect } from 'react';


function App() {
  const history = useHistory();
  const changeURL= ()=>{history.push('/mailForm')};
 
  return (
    <div className="App">
      <Switch>
            {/* Each route is case, eg. - case '/about': */}
          
            
          <Route path="/mailForm">
            <MailForm />
          </Route>

          <Route path="/mailSent">
            <h1>Mail Sent Successfully</h1>
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
