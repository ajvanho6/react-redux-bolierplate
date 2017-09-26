import React from 'react';
import {Link} from 'react-router';
import routes from '../routes';

export default class Footer extends React.Component {
    render() {
        return (
            <div>
                <Link to={routes.HOME}>Home</Link>
                <Link to={routes.SIGN_IN}>Sign in</Link>
                <Link to={routes.PROFILE}>Profile</Link>
            </div>);
    }
}