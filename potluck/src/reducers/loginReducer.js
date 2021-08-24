//Waiting on API for further implementation

import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL } from "../actions/loginActions";

const initialLoginState = {
    user: { //filler state
        username: "Lambda",
        password: "School",
        token: "",
    },
    loggedAuth: false,
    error: "",
}

const loginReducer = (state = initialLoginState, action) => {
    switch(action.type) {
        case LOGIN_REQUEST: //verify token
            return ({
                ...state,
                token: action.payload,
            });

        case LOGIN_SUCCESS: //set current credentials
            return ({
                ...state,
                user: action.payload,
                loggedAuth: true,
            });

        case LOGIN_FAIL: //display error, no token found
            return ({
                ...state,
                loggedAuth: false,
                error: action.payload.error,
            });

        default:
            return state;
    }
}

export default loginReducer;