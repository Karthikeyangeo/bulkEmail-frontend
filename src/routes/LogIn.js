import {useFormik} from  "formik";
import * as yup from 'yup';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { API } from '../globalData';
import { useHistory } from "react-router-dom";
import loginIcon from  '../img/loginIcon.jpg'

const formValidationSchema = yup.object({
    username: yup.string()
                .min(5,"Minimum length of username should be 5 chars")
                .max(12,"Max length of username should be 12 chars")
                .required("Mandatory field"),
    password : yup.string()
                    .min(8,"Minimum length of password should be 5 chars")
                    .max(12,"Max length of password should be 12 chars")
                    .matches(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@!#%&]).{8,}$/g,'Password pattern did not match')
                    .required("Mandatory field"),
})



export function LogIn() {
    const {handleSubmit,values,handleBlur,handleChange,errors,touched,resetForm} = useFormik({
        initialValues : {username: "",password:""},
        validationSchema:formValidationSchema,
        onSubmit :(values) => {
            console.log("onSubmit", values);
            addUser(values);
            resetForm();
        },
    });

    // const history = useHistory();

    const addUser =(newUser)=> {
        fetch(`${API}/users/login`,{
            method:"POST",
            body:JSON.stringify(newUser),
            headers :{'content-type':'application/json'}
    
        })
    };

    return(
        <form onSubmit ={handleSubmit}>
            <div className="logInForm">
                <div className="login-headers">
                    < img className={"logIn-logo"} alt={"LogIn Logo"} src={loginIcon} width={200} height={200}/>  
                    {/* <h3>Sign Up </h3> */}
                </div>

                <TextField
                    
                    id="username"
                    label="Username"
                    variant="outlined"
                    type='text'
                    value={values.username}
                    onChange={handleChange}
                    onBlur = {handleBlur}
                    placeholder="Please enter your username"
                    helperText = {errors.username && touched.username ? errors.username : ""}
                />
                
                <TextField
                    id="password"
                    label="Password"
                    autoComplete="true"
                    variant="outlined"
                    value={values.password}
                    onChange={handleChange}
                    onBlur = {handleBlur}
                    type="password"
                    placeholder="Please enter your password"
                    helperText = {errors.password && touched.password ? errors.password : ""}
                />
                
                <Button variant="contained" color="success" type="submit" style={{textTransform: 'none'}}>Log In</Button>
            </div>
        </form>
    )
}

