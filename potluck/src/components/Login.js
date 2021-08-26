import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import axios from 'axios';

import * as yup from 'yup';
import schema from '../validation/loginSchema'

const initialLoginValues= {
    username: "Lambda",
    password: "School",
    //Static values for quicker testing on server
}

const initialErrors = {
    username: '',
    password: '',
}

const initialDisabled = true;

function Login() {
    const [ credentials, setCredentials ] = useState(initialLoginValues);
    const [ disabled, setDisabled] = useState(initialDisabled);
    const [ errors, setErrors ] = useState(initialErrors);
    const { push } = useHistory();

    const changeHandler = (event) => {
        validate(event.target.name, event.target.value)
        setCredentials({
            ...credentials,
            [event.target.name]: event.target.value, 
        })
    }

    const login = (event) => {
        event.preventDefault();

        axios.post("https://potluckbw-backend.herokuapp.com/api/auth/login", credentials)
            .then(response => {
                console.log(response);
                localStorage.setItem('token', response.data.payload);
                push('/home')
            })
            .catch(error => {
              console.log(error);
            })
        //Temporary until endpoints are completed
        setCredentials(initialLoginValues);
        push('/home')
      }

    const validate = (name, value) => {
        yup.reach(schema, name)
          .validate(value)
          .then(() => setErrors({...errors,[name]: ""}))
          .catch(err => setErrors({...errors, [name]:err.errors[0]}))
      }

      useEffect(() => {
        schema.isValid(credentials).then(valid => {
          setDisabled(!valid)
        })
      }, [credentials])

    return (
        <div className = "loginPage">
            <div className='login-img'>
                <h1 className='login-h1'>Login To Get Started</h1>
            

                <div className='errors'>
                    <div>{errors.username}</div>
                    <div>{errors.password}</div>
                </div>
                <div className = "login-form-container">
                    <form onSubmit = {login} className='login-form'>
                        <label>Username:
                            <input
                                id = "username"
                                name = "username"
                                placeholder = "Username"
                                value = {credentials.username}
                                type = "text"
                                onChange = {changeHandler}
                            />
                        </label>

                        <label>Password:
                            <input 
                                id = "password"
                                name = "password"
                                placeholder = "Password"
                                value = {credentials.password}
                                type = "password"
                                onChange = {changeHandler}
                            />
                        </label>
                        <Button disabled = {disabled} color='secondary'>Log in</Button>
                    </form>
                    <div className='login-footer'>
                      <p>Haven't Signed Up? <Link to='/register'>Register Here!</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
