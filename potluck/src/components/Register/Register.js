import React, {useState} from 'react'
import { useHistory } from 'react-router';
import axios from 'axios';

const initialRegisterValues= {
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    confirmPassword: "",
    organizer: false
}

function Register() {
    const [ credentials, setCredentials ] = useState(initialRegisterValues);
    const [ error, setError ] = useState('')
    const { push } = useHistory();

    const changeHandler = (event) => {
        setCredentials({
            ...credentials,
            organizer: true,
            [event.target.name]: event.target.value, 
        })
    }

    const register = (event) => {
        event.preventDefault();
        axios.post("#", credentials)
            .then(response => {
              localStorage.setItem('token', response.data.payload);
              push('/home')
            })
            .catch(error => {
              console.log(error);
              setError('There was a problem while creating your account.')
            })

            if (credentials.username === "" || credentials.password === '' || credentials.firstName === '' || credentials.lastName === '') {
                setError('Please fill out the entire form.')
            } else if (credentials.password !== credentials.confirmPassword){
                setError('Passwords do not match.')
            }
      }

    return (
        <div className = "registerPage"> 
           <h1>Register to start scheduling your potluck!</h1>
            <div className = "registerForm">
                <form onSubmit = {register}>
                    <label>First Name:
                            <input
                                id = "firstName"
                                name = "firstName"
                                value = {credentials.firstName}
                                type = "text"
                                onChange = {changeHandler}
                            />
                        </label>

                    <label>Last Name:
                        <input
                            id = "lastName"
                            name = "lastName"
                            value = {credentials.lastName}
                            type = "text"
                            onChange = {changeHandler}
                        />
                    </label>

                    <label>Username:
                        <input
                            id = "username"
                            name = "username"
                            value = {credentials.username}
                            type = "text"
                            onChange = {changeHandler}
                        />
                    </label>

                    <label>Password:
                        <input 
                            id = "password"
                            name = "password"
                            value = {credentials.password}
                            type = "password"
                            onChange = {changeHandler}
                        />
                    </label>

                    <label>Confirm Password:
                        <input 
                            id = "confirmPassword"
                            name = "confirmPassword"
                            value = {credentials.confirmPassword}
                            type = "password"
                            onChange = {changeHandler}
                        />
                    </label>

                    <label> Organzier?
                        <input 
                            id = "organizer"
                            name = "organizer"
                            value = {credentials.organizer}
                            type = "checkbox"
                            onChange = {changeHandler}
                            />
                    </label>
                    <button type="submit"> Register </button>
                </form>
            </div>
            <p className="error">{error}</p>
        </div>
    )
}

export default Register
