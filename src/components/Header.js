import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function ConditionalHeader(P) {
    if (P.ISLOGGEDIN) {
        return (
            <div className="collapse navbar-collapse">
                <Link className="navbar-brand" style={{ paddingTop: '0px' }} to="/home">Sysco PoS System</Link>
                <div className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <Link className="nav-item nav-link" to="/my_orders">My Orders</Link>
                    <Link className="nav-item nav-link" to="/create_order">Create Order</Link>
                </div>
                <div className="navbar-nav my-2 my-lg-0">
                    <Link className="nav-item nav-link" to="/logout">Logout</Link>
                </div>
            </div>
        );
    } else {
        return (
            <div className="collapse navbar-collapse">
                <Link className="navbar-brand" style={{ paddingTop: '0px' }} to="/home">Sysco PoS System</Link>
                <div className="navbar-nav ml-auto">
                    <Link className="nav-item nav-link" to="/login">Login</Link>
                    <Link className="nav-item nav-link" to="/register">Register</Link>
                </div>
            </div>
        );
    }
}

/**
 * @abstract Navigation bar at the top of page
 * @description This will change state depending on the user log state
 * @param ISLOGGEDIN Logged status from global app state
 */
class Header extends Component {
    render() {
        return (
            <header>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <ConditionalHeader ISLOGGEDIN={this.props.ISLOGGEDIN} />
                </nav>
            </header>
        );
    }
}

Header.propTypes = {
    ISLOGGEDIN: PropTypes.bool,
};

export default Header;
