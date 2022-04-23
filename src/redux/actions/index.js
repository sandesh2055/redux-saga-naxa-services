import { ActionTypes } from "../constants/actionType";
export const getServices = () => {
    return {
        type: ActionTypes.GET_SERVICES,
    }
}

export const serviceSuccess = (services) => {
    return {
        type: ActionTypes.SERVICE_SUCCESS,
        payload: services
    }
}


export const scrollToTop = (flag) => {
    return {
        type: ActionTypes.SCROLL_TOP,
        payload: flag
    }
}