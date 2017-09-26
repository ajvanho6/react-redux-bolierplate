import React from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import PageContainer from './containers/PageContainer';
import HomeContainer from './containers/pages/HomeContainer';
import SignInContainer from './containers/pages/SignInContainer';
import ProfileContainer from './containers/pages/ProfileContainer';
import Footer from './containers/Footer';
import routes from './routes';
import '../scss/style.scss';

class AppRouter extends React.Component {
    static propTypes = {
        isUserSignedIn: PropTypes.bool,
    };

    render() {
        return (
            <Router key={new Date()} history={browserHistory}>
                <Route path={routes.ROOT} component={PageContainer}>
                    <IndexRoute components={{content: HomeContainer, footer: Footer}}/>
                    <Route path={routes.HOME} components={{content: HomeContainer, footer: Footer}}/>
                    {/* profile pages */}
                    <Route path={routes.SIGN_IN}
                           onEnter={this._requireAnnonymous} components={{content: SignInContainer, footer: Footer}}/>
                    <Route path={routes.PROFILE}
                           onEnter={this._requireAuth} components={{content: ProfileContainer, footer: Footer}}/>
                </Route>
            </Router>
        );
    }

    _requireAuth = (nextState, replace) => {
        if (!this.props.isUserSignedIn) {
            replace({
                pathname: routes.SIGN_IN,
                state: {nextPathname: nextState.location.pathname},
            });
        }
    };

    _requireAnnonymous = (nextState, replace) => {
        if (this.props.isUserSignedIn) {
            replace({
                pathname: routes.HOME,
                state: {nextPathname: nextState.location.pathname},
            });
        }
    };
}

const mapStateToProps = (state) => {
    return {
        isUserSignedIn: state.authReducer.isUserSignedIn,
    };
};

const App = connect(mapStateToProps)(AppRouter);

export default App;
