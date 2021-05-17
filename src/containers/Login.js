import React, { useState } from 'react';
import { Card, Form, Button, Col, Alert } from 'react-bootstrap';
import styles from './Login.module.css';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { login } from '../actions/auth';

const Login = ({ login, isAuthenticated }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const { email, password } = formData;

    const onChange = e => setFormData({
        ...formData,
        [e.target.name]: e.target.value
    })
    const onSubmit = e => {
        e.preventDefault();
        login(email, password);
    }
    if (isAuthenticated)
        return <Redirect to='/' />
    return (
        <Card className={styles.login_card}>
            <Card.Body>
                <Card.Title className={styles.title}>Login</Card.Title>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" name="email" onChange={e => onChange(e)} value={email} />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" name="password" onChange={e => onChange(e)} value={password} />
                    </Form.Group>
                    <Form.Row>
                        <Col>
                            <Button variant="primary" type="submit" onClick={onSubmit}>
                                Login
                            </Button>
                        </Col>
                        <Col>
                            <p>Don't have account? Then <Link to='/signup'>Sign Up</Link></p>
                        </Col>
                    </Form.Row>
                </Form>
            </Card.Body>
        </Card>
    )
}
Login.propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
}
const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.isAuthenticated
    }
}

export default connect(mapStateToProps, { login })(Login);