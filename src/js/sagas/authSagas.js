// import {put} from 'redux-saga/effects';
import {put, call} from 'redux-saga/effects';
import * as ApiService from '../api';
import actionTypes from '../actions/actionTypes';

export function* signInUser(payload) {
    // yield put({ type: actionTypes.SIGN_IN_USER_SUCCESS });
    try {
        const response = yield call(ApiService.dummyCall, payload);
        yield put({type: actionTypes.SIGN_IN_USER_SUCCESS, response});
    } catch (error) {
        yield put({type: actionTypes.SIGN_IN_USER_ERROR, error});
    }
}

// export function* registerUser({payload}) {
    // try {
    //     const registrationRequest = yield call(ApiService.registerUser, payload);
    //     yield put({type: actionTypes.REGISTER_USER_SUCCESS, registrationRequest});
    // } catch (error) {
    //     yield put({type: actionTypes.REGISTER_USER_ERROR, error});
    // }
// }