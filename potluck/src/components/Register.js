import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import axios from 'axios';
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import { Button } from 'react-bootstrap';
import schema from '../validation/loginSchema';

const initialRegisterValues= {
    id: 1,
    username: "Lambda",
    password: "School",
    //Static values for quicker testing on server
}

const initialErrors = {
    username: '',
    password: '',
}

const initialDisabled = true;

function Register() {
    const [ credentials, setCredentials ] = useState(initialRegisterValues);
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

    const register = (event) => {
        event.preventDefault();

        axios.post("https://potluckbw-backend.herokuapp.com/api/auth/register", credentials)
            .then(response => {
                console.log(response);
                localStorage.setItem('token', response.data.payload);
                push('/login')
            })
            .catch(error => {
              console.log(error);
            })
        //Temporary until endpoints are completed
        // setCredentials(initialLoginValues);
        // push('/login')
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
        <div className = "registerPage">
            <div className='register-img'>
            <h1 className='register-h1'>Register To Plan Your First Potluck!</h1>
            <div className='errors'>
                <div>{errors.username}</div>
                <div>{errors.password}</div>
            </div>

            <div className = "register-form-container">
                <form onSubmit={register} className='register-form'>
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
                    <Button disabled = {disabled}>Register</Button>
                </form>

                <div className = 'register-footer'>
                    <Link to={`/login`} className = "loginButton">Already have an account? Login!</Link>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Register
