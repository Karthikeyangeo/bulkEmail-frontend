import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';

export function Homepage(){
    const history = useHistory();
    const changeURL= ()=>{history.push('/users/signup')};
    return(
        <div className="home-page-content">
              <h1>Bulk Email </h1> 
              <Button color='secondary' variant='contained' onClick={changeURL}>Enter</Button>
        </div>
    )
}


