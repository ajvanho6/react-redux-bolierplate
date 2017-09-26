import * as Request from './Request';
import apiEndpoints from './apiEndpoints';

/**
 * Dummy API call
 *
 * @param {Object} payload
 * @return {*}
 */
export const dummyCall = (payload = {}) => {
    // console.log('here');
    return Request.getPromise({
        url: apiEndpoints.DUMMY_CALL,
        method: 'GET',
        data: payload,
    }).then((error, response, body) => {
        return body;
    });
};

/**
 * Sign in user
 *
 * @param {Object} payload
 * @return {*}
 */
// export const signInUser = (payload = {}) => {
//     let qs = {
//         'username': payload.username,
//         'password': payload.password,
//     };
//
//     return Request.getPromise({
//         url: apiEndpoints.SIGN_IN,
//         method: 'POST',
//         body: qs
//     }).then(({error, response, body}) => {
//         return body;
//     });
// };

/**
 * Register user
 *
 * @param {Object} payload
 * @return {*}
 */
// export const registerUser = (payload = {}) => {
//     return Request.getPromise({
//         url: apiEndpoints.FETCH_CATEGORIES(payload.mediaFeedId),
//         method: 'GET',
//         // qs: qs
//     }).then(({error, response, body}) => {
//         body['id'] = payload.mediaFeedId;
//         return body;
//     });
// };
