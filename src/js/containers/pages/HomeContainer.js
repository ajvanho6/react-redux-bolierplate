import {connect} from 'react-redux';
import * as authActions from '../../actions/authActions';
import HomePage from '../../components/pages/Home';
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

const HomeContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(HomePage);

export default HomeContainer;
