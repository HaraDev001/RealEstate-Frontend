import React, { useState } from 'react';
import axios from 'axios';
import Loader from 'react-loader-spinner';
import PropTypes from 'prop-types';
import { Form, Col, Button, Container, Row } from 'react-bootstrap';


const ListingForm = (props) => {
    const [formData, setFormData] = useState({
        sale_type: 'For Sale',
        price: '$0+',
        bedrooms: '0+',
        home_type: 'house',
        sqft: '1000+',
        bathrooms: '0+',
        days_listed: '1 or less',
        has_photos: '1+',
        open_house: 'false',
        keywords: ''
    })
    const { sale_type, price, bedrooms, home_type, sqft, bathrooms, days_listed, has_photos, open_house, keywords } = formData;

    const [loading, setLoading] = useState(false);

    const onChange = e => setFormData({
        ...formData,
        [e.target.name]: e.target.value
    })

    const onSubmit = e => {
        e.preventDefault();

        axios.defaults.headers = {
            "Content-Type": "application/json"
        };

        setLoading(true);
        
        axios.post('/api/listings/search', {
            sale_type, price, bedrooms, home_type, sqft, bathrooms, days_listed, has_photos, open_house, keywords
        })
        .then(res => {
            console.log(res.data);
            props.setListing(res.data);
            window.scrollTo(0, 0);
            setLoading(false);
        })
        .catch(err => {
            setLoading(false);
            window.scrollTo(0, 0);
        })
    }
    return (

        <Form onSubmit={e => onSubmit(e)}>
            <Form.Row>
                <Col>
                    <Form.Label>Sale or Rent</Form.Label>
                    <Form.Control as="select" size="sm" name='sale_type' onChange={e => onChange(e)} value={sale_type}>
                        <option>For Sale</option>
                        <option>For Rent</option>
                    </Form.Control>
                </Col>
                <Col>
                    <Form.Label>Minimum Price</Form.Label>
                    <Form.Control as="select" size="sm" name='price' onChange={e => onChange(e)} value={price}>
                        <option>$0+</option>
                        <option>$200,000+</option>
                        <option>$400,000+</option>
                        <option>$600,000+</option>
                        <option>$800,000+</option>
                        <option>$1,000,000+</option>
                        <option>$1,200,000+</option>
                        <option>$1,500,000+</option>
                        <option>Any</option>
                    </Form.Control>
                </Col>
                <Col>
                    <Form.Label>Bedrooms</Form.Label>
                    <Form.Control as="select" size="sm" name='bedrooms' onChange={e => onChange(e)} value={bedrooms}>
                        <option>0+</option>
                        <option>1+</option>
                        <option>2+</option>
                        <option>3+</option>
                        <option>4+</option>
                        <option>5+</option>
                    </Form.Control>
                </Col>
                <Col>
                    <Form.Label>Home Type</Form.Label>
                    <Form.Control as="select" size="sm" name='home_type' onChange={e => onChange(e)} value={home_type}>
                        <option>House</option>
                        <option>Condo</option>
                        <option>Townhouse</option>
                    </Form.Control>
                </Col>
                <Col>
                    <Form.Label>Bathrooms</Form.Label>
                    <Form.Row>
                        <Col>
                            <Form.Control as="select" size="sm" name='bathrooms' onChange={e => onChange(e)} value={bathrooms}>
                                <option>0+</option>
                                <option>1+</option>
                                <option>2+</option>
                                <option>3+</option>
                                <option>4+</option>
                            </Form.Control>
                        </Col>
                        <Col>
                            {
                                loading ?
                                    <Loader
                                        type="Oval"
                                        color="#424242"
                                        height={50}
                                        width={50}
                                    />
                                    :
                                    <Button variant="success" type="submit" onClick={onSubmit} >
                                        Submit
                            </Button>
                            }
                        </Col>
                    </Form.Row>
                </Col>
            </Form.Row>
            <Form.Row>
                <Col>
                    <Form.Label>Sqft</Form.Label>
                    <Form.Control as="select" size="sm" name='sqft' onChange={e => onChange(e)} value={sqft}>
                        <option>1000+</option>
                        <option>1200+</option>
                        <option>1500+</option>
                        <option>2000+</option>
                        <option>Any</option>
                    </Form.Control>
                </Col>
                <Col>
                    <Form.Label>Days Listed</Form.Label>
                    <Form.Control as="select" size="sm" name='days_listed' onChange={e => onChange(e)} value={days_listed}>
                        <option>1 of less</option>
                        <option>2 of less</option>
                        <option>5 of less</option>
                        <option>10 of less</option>
                        <option>20 of less</option>
                        <option>Any</option>
                    </Form.Control>
                </Col>
                <Col>
                    <Form.Label>Has Photos</Form.Label>
                    <Form.Control as="select" size="sm" name='has_photos' onChange={e => onChange(e)} value={has_photos}>
                        <option>1+</option>
                        <option>3+</option>
                        <option>5+</option>
                        <option>10+</option>
                        <option>15+</option>
                    </Form.Control>
                </Col>
                <Col>
                    <Form.Label>Keywords</Form.Label>
                    <Form.Control type="text" name="" value={keywords} onChange={e => onSubmit(e)} style={{ height: '31px' }} />
                </Col>
                <Col>
                    <Form.Check type="checkbox" name='open_house' value={open_house} onChange={e => onChange(e)} label="Open House" />
                </Col>
            </Form.Row>
        </Form>
    )
}

ListingForm.propTypes = {
    setListing: PropTypes.func.isRequired
}
export default ListingForm;