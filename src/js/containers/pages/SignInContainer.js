import {connect} from 'react-redux';
import * as authActions from '../../actions/authActions';
import SignInPage from '../../components/pages/SignIn';

const mapStateToProps = (state) => {
    return {
        username: state.authReducer.username,
        userSignedIn: state.authReducer.isUserSignedIn,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        signInUser: (payload) => { return dispatch(authActions.signInUser(payload)); },
    };
};

const SignInContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SignInPage);

export default SignInContainer;
