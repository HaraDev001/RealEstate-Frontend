import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Alert } from 'react-bootstrap';

const CustomAlert = ({alerts}) => alerts!== null && alerts.length>0 && alerts.map(alert=>{
    return (
        <Alert key={alert.id} variant = {alert.alertType}>
            {alert.msg}
        </Alert>
    )
})
CustomAlert.propTypes = {
    alerts: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    alerts: state.alert
})
export default connect(mapStateToProps)(CustomAlert);