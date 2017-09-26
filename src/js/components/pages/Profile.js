import React from 'react';
import PropTypes from 'prop-types';

export default class Profile extends React.Component {
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
                <h2>Welcome {this.props.username}</h2>
            </div>);
    }
}