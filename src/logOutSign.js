import LogoutIcon from '@mui/icons-material/Logout';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';

export function LogOutSign(){

    const history = useHistory();
    const logout = () => {
        localStorage.removeItem("currentUser");
        localStorage.removeItem("token");
        history.push("/users/login");
      };
    return(
        <div className='logOutDiv'>
            <Button 
                variant="contained" 
                type="button"  
                className="logoutButton" 
                style={{ textTransform : 'none'}} 
                onClick={logout}
            >

                <LogoutIcon />
                Log Out
            </Button>
        </div>
    )
}