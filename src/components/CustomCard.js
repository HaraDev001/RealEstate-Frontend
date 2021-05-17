import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types'
import styles from './CustomCard.module.css';

const CustomCard = (props) => {

    const numberWithCommas = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    return (
        <Card className={styles.card}>
            <h3 >{props.title}</h3>
            <Card.Img variant='top' src={props.photo_main} alt='house image'  />
            <Card.Text >{props.address},{props.state}</Card.Text>
            <Row style={{ padding: "10px" }}>
                <Col>
                    <p >Price: ${numberWithCommas(props.price)}</p>
                    <p >Bedrooms: {props.bedrooms}</p>
                    <p >Bathrooms: {props.bathrooms}</p>
                </Col>
                <Col>
                    <p >{props.sale_type}</p>
                    <p >{props.home_type}</p>
                    <p >Sqft: {props.sqft}</p>
                </Col>
            </Row>
            <Link  className={styles.link} to={`/listings/${props.slug}`}>View Listing</Link>
           
        </Card>
    )
}

CustomCard.propTypes = {
    title: PropTypes.string.isRequired,
    photo_main: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    bedrooms: PropTypes.number.isRequired,
    bathrooms: PropTypes.number.isRequired,
    sale_type: PropTypes.string.isRequired,
    home_type: PropTypes.string.isRequired,
    sqft: PropTypes.number.isRequired,
    slug: PropTypes.string.isRequired,

}
export default CustomCard;