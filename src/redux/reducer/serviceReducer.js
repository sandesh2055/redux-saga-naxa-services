import { ActionTypes } from "../constants/actionType"

const initialState = {
    services: []
}
export const serviceReducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case ActionTypes.SERVICE_SUCCESS:
            return {...state, services: payload};
        default:
            return state;
    }

}