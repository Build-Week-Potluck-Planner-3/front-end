import { FETCH_START, FETCH_SUCCESS, FETCH_FAIL, ADD_POTLUCK, SET_ERROR } from "../actions/potluckActions";

const initialPotLuckState = {
    potlucks: [{
            id: 1,
            title: 'Startup Event',
            date: null,
            time: null,
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

        case FETCH_SUCCESS:
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

        case ADD_POTLUCK: //To be reviewed once PotLuck form is finalized
            return ({
                ...state,
                potlucks: [...state.potlucks, {
                        id: state.potlucks.length() + 1,
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