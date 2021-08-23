import axios from 'axios';

export const fetchPotLuck = () => {
    return (dispatch) => {
        dispatch(fetchStart());
        axios.get('#') //placeholder for backend
            .then(response => {
                dispatch(fetchSuccess(response.data));
            })
            .catch(error => {
                dispatch(fetchFail(error));
            });
    }
}

export const FETCH_START = "FETCH_START";
export const fetchStart = () => {
    return({type: FETCH_START});
}

export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const fetchSuccess = (potlucks) => {
    return({type: FETCH_SUCCESS, payload: potlucks});
}

export const FETCH_FAIL = "FETCH_FAIL";
export const fetchFail = (error) => {
    return({type: FETCH_FAIL, payload: error});
}

export const ADD_POTLUCK = "ADD_POTLUCK";
export const addPotluck = (potluck) => {
    return({type: ADD_POTLUCK, payload: potluck})
}

export const SET_ERROR = "SET_ERROR";
export const setError = (value) => {
    return({type: SET_ERROR, payload: value})
}
