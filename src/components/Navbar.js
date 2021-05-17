import React, { Fragment } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../actions/auth';
import CustomAlert from './Alert';
import PropTypes from 'prop-types';
import { Navbar, Nav } from 'react-bootstrap'


const NavBar = ({ auth: { isAuthenticated, loading }, logout }) => {
    return (
        <div>
            <Navbar bg="primary" variant="dark">
                <Navbar.Brand>Real Estate</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/listings">Listings</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>
                    <Nav.Link href="/contact">Contact</Nav.Link>
                </Nav>
                <Nav className="ml-auto">
                    {
                        isAuthenticated?
                            <Nav.Link href="/logout" onClick={logout}>Logout</Nav.Link>
                        :
                        <Fragment>
                            <Nav.Link href="/login">Login</Nav.Link>
                            <Nav.Link href="/signup">Signup</Nav.Link>
                        </Fragment>   
                    }                 
                </Nav>
            </Navbar>
            <CustomAlert />
        </div>
    )
}
NavBar.propTypes = {
    logout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}
const mapStateToProps = state => ({
    auth: state.auth
})
export default connect(mapStateToProps, { logout })(NavBar);
