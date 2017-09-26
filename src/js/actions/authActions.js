import actionTypes from './actionTypes';

/**
 * Auth actions
 *
 * @returns {*}
 */
export const signInUser = (payload = {}) => { return {type: actionTypes.SIGN_IN_USER, payload}; };