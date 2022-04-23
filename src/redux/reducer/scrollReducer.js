import { ActionTypes } from "../constants/actionType"

const initialState = {
    flag: false
}
export const scrollReducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case ActionTypes.SCROLL_TOP:
            return {...state, flag: payload};
        default:
            return state;
    }

}