import { call, put, takeEvery } from 'redux-saga/effects'
import { serviceSuccess } from '../actions';
import {serviceApi} from '../apis/serviceApi'
import { ActionTypes } from '../constants/actionType';

function* fetchServices() {
    try {
        const services = yield call(serviceApi);
        yield put(serviceSuccess(services));
     } catch (e) {
       console.log(e)
     }
}

function* serviceSaga() {
    console.log("test inside saga")
   yield takeEvery(ActionTypes.GET_SERVICES, fetchServices)
}


export default serviceSaga;
