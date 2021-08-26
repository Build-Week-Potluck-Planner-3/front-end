import axios from 'axios';

export const fetchUsers = () => {
    return (dispatch) => {
        axios.get('https://potluckbw-backend.herokuapp.com/api/users')
            .then(response => {
                console.log(response.data)
                dispatch(fetchSuccess(response.data));
            })
            .catch(error => {
                dispatch(fetchFail(error));
            });
    }
}

export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const fetchSuccess = (users) => {
    return({type: FETCH_SUCCESS, payload: users});
}

export const FETCH_FAIL = "FETCH_FAIL";
export const fetchFail = (error) => {
    return({type: FETCH_FAIL, payload: error});
}

export const SET_USERS = "SET_USERS";
export const setUsers = (user) => {
    return({type: SET_USERS, payload: user})
}