import { FETCH_SUCCESS, FETCH_FAIL, SET_USERS } from "../actions/registerActions";

export const initialUsersState = {
    users: [],
    error: '',
}

const registerReducer = (state = initialUsersState, action) => {
    switch(action.type) {
        case FETCH_SUCCESS:
            return ({
                ...state,
                users: action.payload,
            });
        case FETCH_FAIL:
            return ({
                ...state,
                error: action.payload,
            });
        case SET_USERS:
            return ({
                ...state,
                users: [...state.users, action.payload],
            })
        default:
            return state;
    }
}

export default registerReducer;