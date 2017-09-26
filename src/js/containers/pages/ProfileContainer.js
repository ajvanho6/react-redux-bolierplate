import {connect} from 'react-redux';
import * as authActions from '../../actions/authActions';
import ProfilePage from '../../components/pages/Profile';
// import Immutable from 'immutable';
// import MediaFeedIds from '../lib/MediaFeedIds';

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

const ProfileContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ProfilePage);

export default ProfileContainer;
