// import {takeLatest, takeEvery} from 'redux-saga/effects';
import {takeLatest} from 'redux-saga/effects';
import * as authSagas from './authSagas';
import actionTypes from '../actions/actionTypes';

// Watches for SIGN_IN_USER action type asynchronously
export function* watchSignInUser() {
    yield takeLatest(actionTypes.SIGN_IN_USER, authSagas.signInUser);
}
