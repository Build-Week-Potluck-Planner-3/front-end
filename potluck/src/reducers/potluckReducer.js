import { FETCH_START, FETCH_SUCCESSES, FETCH_FAIL, ADD_POTLUCK, SET_ERROR } from "../actions/potluckActions";

const initialPotLuckState = {
    potlucks: [{
            id: 1,
            title: 'Startup Event',
            date: "8/27/2021",
            time: "3:00 PM",
            location: 'Lambda School',
            description: 'Buildweek Potluck!',
        }],
    loading: false,
    error: '',
}

const potluckReducer = (state = initialPotLuckState, action) => {
    switch(action.type) {
        case FETCH_START:
            return ({
                ...state,
                loading: true,
                error: ''
            });

        case FETCH_SUCCESSES:
            return ({
                ...state,
                potlucks: action.payload,
                loading: false
            });

        case FETCH_FAIL:
            return ({
                ...state,
                error: action.payload,
                loading: false
            });

        case ADD_POTLUCK:
            return ({
                ...state,
                potlucks: [...state.potlucks, {
                        id: state.potlucks.length + 1,
                        title: action.payload.title,
                        date: action.payload.date,
                        time: action.payload.time,
                        location: action.payload.location,
                        description: action.payload.description,
                }]
            });

        case SET_ERROR:
            return ({
                ...state,
                error: action.payload
            });
        default:
            return state;
    }
}

export default potluckReducer;