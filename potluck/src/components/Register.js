import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import axios from 'axios';
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import { Button } from 'react-bootstrap';
import schema from '../validation/loginSchema';
import { fetchUsers, setUsers } from '../actions/registerActions';
import { connect } from 'react-redux';

const initialRegisterValues= {
    user_id: 0,
    username: "",
    password: "",
}

const initialErrors = {
    username: '',
    password: '',
}

const initialDisabled = true;

function Register(props) {
    const { users } = props;
    const [ credentials, setCredentials ] = useState(initialRegisterValues);
    const [ disabled, setDisabled] = useState(initialDisabled);
    const [ errors, setErrors ] = useState(initialErrors);
    const { push } = useHistory();

    const changeHandler = (event) => {
        validate(event.target.name, event.target.value)
        setCredentials({
            ...credentials,
            [event.target.name]: event.target.value, 
            user_id: users.length + 1,
        })
    }

    //Post new user credentials to API
    const register = (event) => {
        event.preventDefault();
        axios.post("https://potluckbw-backend.herokuapp.com/api/auth/register", credentials)
            .then(response => {
                props.setUsers(credentials);
                push('/login')
            })
            .catch(error => {
              console.log(error);
            })
      }

    const validate = (name, value) => {
        yup.reach(schema, name)
          .validate(value)
          .then(() => setErrors({...errors,[name]: ""}))
          .catch(err => setErrors({...errors, [name]:err.errors[0]}))
      }

    //Verify user credential inputs
    useEffect(() => {
        schema.isValid(credentials).then(valid => {
            setDisabled(!valid)
        })
    }, [credentials])

    //Get users list from API
    useEffect(() => {
        props.fetchUsers();
    }, [])

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

const mapStateToProps = state => {
    return {
        users: state.registerReducer.users,
    }
}

export default connect(mapStateToProps, {fetchUsers, setUsers})(Register);
