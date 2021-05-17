import React, { useState } from 'react';
import { Card, Form, Button, Col, Alert } from 'react-bootstrap';
import styles from './Signup.module.css';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { signup } from '../actions/auth';
import { setAlert } from '../actions/alert';

const Signup = ({ signup, setAlert, isAuthenticated }) => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    })
    const { name, email, password, password2 } = formData;
    const onChange = e => setFormData({
        ...formData,
        [e.target.name]: e.target.value
    })
    const onSubmit = (e) => {
        e.preventDefault();
        if (password !== password2){
            setAlert('Passwords do not match.', 'warning');
        }
        else
        {
            signup( name, email, password, password2 );
        }
    };
    if (isAuthenticated)
        return <Redirect to='/' />
    return (
        <div>
            <Card className={styles.signup_card}>
                <Card.Body>
                    <Card.Title className={styles.title}>Create account</Card.Title>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" name="email" onChange={e => onChange(e)} value={email} />
                        </Form.Group>
                        <Form.Group controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter name" name="name" onChange={e => onChange(e)} value={name} />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" name="password" onChange={e => onChange(e)} value={password} />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword2">
                            <Form.Label>Password2</Form.Label>
                            <Form.Control type="password" placeholder="Confirm password" name="password2" onChange={e => onChange(e)} value={password2} />
                        </Form.Group>
                        <Form.Row>
                            <Col>
                                <Button variant="primary" type="submit" onClick={onSubmit}>
                                    Register
                                </Button>
                            </Col>
                            <Col>
                                <p>Already have account? Then <Link to='/login'>Log In</Link></p>
                            </Col>
                        </Form.Row>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    )
}

Signup.propTypes = {
    signup: PropTypes.func.isRequired,
    setAlert: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.isAuthenticated
    }
}
export default connect(mapStateToProps, { setAlert, signup })(Signup);