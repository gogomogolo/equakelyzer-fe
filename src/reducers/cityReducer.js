import {FETCH_CITIES} from "../actions/types";

const initialState = {
    items: []
};

export default function(state = initialState, action){
    switch (action.type) {
        case FETCH_CITIES:
            return {
                ...state,
                items: action.message
            };
        default:
            return state;
    }
}
