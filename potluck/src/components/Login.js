import React, {useState} from 'react'
import { useHistory } from 'react-router';
import axios from 'axios';

const initialLoginValues= {
    username: "username",
    password: "password",
}

function Login() {
    const [ credentials, setCredentials ] = useState(initialLoginValues);
    const { push } = useHistory();

    const changeHandler = (event) => {
        setCredentials({
            ...credentials,
            [event.target.name]: event.target.value, 
        })
    }

    const login = (event) => {
        event.preventDefault();

        axios.post("#", credentials)
            .then(response => {
              localStorage.setItem('token', response.data.payload);
              push('/home')
            })
            .catch(error => {
              console.log(error);
            })
      }

    return (
        <div className = "loginPage">
            <h1>Login to start scheduling your potluck!</h1>
            <div className = "loginForm">
                <form onSubmit = {login}>
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
                </form>
            </div>
        </div>
    )
}

export default Login