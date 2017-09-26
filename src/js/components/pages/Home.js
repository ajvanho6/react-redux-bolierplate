import React from 'react';
import PropTypes from 'prop-types';
// import '../scss/style.scss';

export default class Home extends React.Component {
    static propTypes = {
        username: PropTypes.string,
        userSignedIn: PropTypes.bool,
        signInUser: PropTypes.func,
    };

    static defaultProps = {
        userSignedIn: false,
    };

    render() {
        return (
            <div>
                {this.props.userSignedIn ?
                    (<h3>Hello {this.props.username}</h3>) : (<h3>Hello guest</h3>)}
                <h2>Homepage</h2>
                <button onClick={this._loginHandler}>Sign in</button>
            </div>);
    }

    _loginHandler = () => {
        console.log('login');
        this.props.signInUser();
    }
}