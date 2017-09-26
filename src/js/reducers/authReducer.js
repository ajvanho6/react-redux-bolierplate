import actionTypes from '../actions/actionTypes';

const initialState = {
    username: '',
    isUserSignedIn: false,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        // case actionTypes.LOAD_SESSION_FROM_LOCAL_STORAGE: {
        //     let userInfo = JSON.parse(localStorage.getItem('userInfo'));
        //
        //     if (userInfo === null || typeof userInfo === 'undefined') {
        //         userInfo = {
        //             username: '',
        //             token: null,
        //             userId: null,
        //             isUserSignedIn: false
        //         }
        //     } else {
        //         userInfo = {
        //             ...userInfo,
        //             isUserSignedIn: true
        //         };
        //     }
        //
        //     return {
        //         ...state,
        //         ...userInfo,
        //     };
        // }

        // case actionTypes.REGISTER_USER_SUCCESS: {
        //     console.log('REGISTER_USER_SUCCESS', action)
        //     return state;
        // }

        case actionTypes.SIGN_IN_USER_SUCCESS: {
            return {
                ...state,
                username: 'vlada',
                isUserSignedIn: true,
            };
        }

        // case actionTypes.SIGN_IN_USER_SUCCESS: {
        //     let userInfo = {
        //         username: action.response.userName,
        //         token: action.response.token,
        //         userId: action.response.userId,
        //     };
        //
        //     localStorage.setItem('userInfo', JSON.stringify(userInfo));
        //
        //     return {
        //         ...state,
        //         ...userInfo,
        //         isUserSignedIn: true
        //     };
        // }

        // case actionTypes.SIGN_OUT_USER: {
        //     localStorage.removeItem('userInfo');
        //
        //     return {
        //         ...state,
        //         username: '',
        //         token: null,
        //         userId: null,
        //         isUserSignedIn: false,
        //     };
        // }

        default:
            return state;
    }
};

export default authReducer;
