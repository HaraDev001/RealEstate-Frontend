import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Row, Col, Container, Breadcrumb, Card, ListGroupItem, ListGroup } from 'react-bootstrap';
import styles from './ListingDetail.module.css';

const ListingDetail = (props) => {
    const [listing, setListing] = useState({});
    const [realtor, setRealtor] = useState({});
    const [price, setPrice] = useState(0);

    const numberWithCommas = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    useEffect(() => {
        const slug = props.match.params.id;
        console.log(localStorage.getItem('token'));
        const config = {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        };

        axios.get(`/api/listings/${slug}`, config)
            .then(res => {
                setListing(res.data);
                setPrice(numberWithCommas(res.data.price));
            })
            .catch(err => {

            })
    }, [props.match.params.id]);

    useEffect(() => {
        const id = listing.realtor;
        console.log(id)
        const config = {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        };

        if (id) {
            axios.get(`/api/realtors/${id}`, config)
                .then(res => {
                    setRealtor(res.data);
                })
                .catch(err => {

                })
        }
    }, [listing.realtor]);

    const displayInteriorImages = () => {
        let images = [];
        images.push(
            <Row key={1}>
                <Col>
                    {listing.photo_1 ?
                        <img className={styles.display_image} src={listing.photo_1} alt='' />
                        :
                        null
                    }
                </Col>
                <Col>
                    {listing.photo_2 ?
                        <img className={styles.display_image} src={listing.photo_2} alt='' />
                        :
                        null
                    }
                </Col>
                <Col>
                    {listing.photo_3 ?
                        <div className={styles.listingdetail_display}>
                            <img className={styles.display_image} src={listing.photo_3} alt='' />
                        </div>
                        :
                        null
                    }
                </Col>
            </Row>
        );
        images.push(
            <Row key={2}>
                <Col>
                    {listing.photo_4 ?
                        <div className={styles.listingdetail_display}>
                            <img className={styles.display_image} src={listing.photo_4} alt='' />
                        </div>
                        :
                        null
                    }
                </Col>
                <Col>
                    {listing.photo_5 ?
                        <div className={styles.listingdetail_display}>
                            <img className={styles.display_image} src={listing.photo_5} alt='' />
                        </div>
                        :
                        null
                    }
                </Col>
                <Col>
                    {listing.photo_6 ?
                        <div className={styles.listingdetail_display}>
                            <img className={styles.display_image} src={listing.photo_6} alt='' />
                        </div>
                        :
                        null
                    }
                </Col>
            </Row>
        );
        images.push(
            <Row key={3}>
                <Col>
                    {listing.photo_7 ?
                        <div className={styles.listingdetail_display}>
                            <img className={styles.display_image} src={listing.photo_7} alt='' />
                        </div>
                        :
                        null
                    }
                </Col>
                <Col>
                    {listing.photo_8 ?
                        <div className={styles.listingdetail_display}>
                            <img className={styles.display_image} src={listing.photo_8} alt='' />
                        </div>
                        :
                        null
                    }
                </Col>
                <Col>
                    {listing.photo_9 ?
                        <div className={styles.listingdetail_display}>
                            <img className={styles.display_image} src={listing.photo_9} alt='' />
                        </div>
                        :
                        null
                    }
                </Col>
            </Row>
        );
        images.push(
            <Row key={4}>
                <Col>
                    {listing.photo_10 ?
                        <div className={styles.listingdetail_display}>
                            <img className={styles.display_image} src={listing.photo_10} alt='' />
                        </div>
                        :
                        null
                    }
                </Col>
                <Col>
                    {listing.photo_11 ?
                        <div className={styles.listingdetail_display}>
                            <img className={styles.display_image} src={listing.photo_11} alt='' />
                        </div>
                        :
                        null
                    }
                </Col>
                <Col>
                    {listing.photo_12 ?
                        <div className={styles.listingdetail_display}>
                            <img className={styles.display_image} src={listing.photo_12} alt='' />
                        </div>
                        :
                        null
                    }
                </Col>
            </Row>
        );
        images.push(
            <Row key={5}>
                <Col>
                    {listing.photo_13 ?
                        <div className={styles.listingdetail_display}>
                            <img className={styles.display_image} src={listing.photo_13} alt='' />
                        </div>
                        :
                        null
                    }
                </Col>
                <Col>
                    {listing.photo_14 ?
                        <div className={styles.listingdetail_display}>
                            <img className={styles.display_image} src={listing.photo_14} alt='' />
                        </div>
                        : null
                    }
                </Col>
                <Col>
                    {listing.photo_15 ?
                        <div className={styles.listingdetail_display}>
                            <img className={styles.display_image} src={listing.photo_15} alt='' />
                        </div>
                        :
                        null
                    }
                </Col>
            </Row>
        )
        return images
    }
    return (
        <div className={styles.listingdetail}>
            <Helmet>
                <title>Realest Estate - Listing | {`${listing.title}`}</title>
                <meta
                    name='description'
                    content='Listing Detail'
                />
            </Helmet>

            <Container className={styles.container}>
                 <h1 className={styles.listingdetail_title}>{listing.title}</h1>
                <p className={styles.listingdetail_location}>{listing.city},{listing.state},{listing.zipcode}</p>
                <Breadcrumb>
                    <Breadcrumb.Item ><Link to='/'>Home</Link></Breadcrumb.Item>
                    <Breadcrumb.Item active>{listing.title}</Breadcrumb.Item>
                </Breadcrumb>
                <Row>
                    <Col xs={12} md={8}>
                        <Card style={{height:"700px"}}>
                            <Card.Img variant="top" src={listing.photo_main} alt='' />
                            <Card.Body>
                                <Row>
                                    <Col>
                                        <ul className={styles.listingdetail_list}>
                                            <li className={styles.listingdetail_list_item}>Home Type: {listing.home_type}</li>
                                            <li className={styles.listingdetail_list_item}>Price: {price}</li>
                                            <li className={styles.listingdetail_list_item}>Bedrooms: {listing.bedrooms}</li>
                                            <li className={styles.listingdetail_list_item}>Bathrooms: {listing.bathrooms}</li>
                                            <li className={styles.listingdetail_list_item}>Squar Feet: {listing.sqft}</li>
                                        </ul>
                                    </Col>
                                    <Col>
                                        <ul className={styles.listingdetail_list}>
                                            <li className={styles.listingdetail_list_item}>Sale Type: {listing.sale_type}</li>
                                            <li className={styles.listingdetail_list_item}>Address: {listing.address}</li>
                                            <li className={styles.listingdetail_list_item}>City: {listing.city}</li>
                                            <li className={styles.listingdetail_list_item}>State: {listing.state}</li>
                                            <li className={styles.listingdetail_list_item}>Zipcode: {listing.zipcode}</li>
                                        </ul>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                        <h2 className={styles.description}>{listing.description}</h2>
                    </Col>
                    <Col xs={6} md={4}>
                        <Card style={{height:"700px"}}>
                            <Card.Img src={realtor.photo} alt='' />
                            <ListGroup className="list-group-flush">
                                <ListGroupItem>Name: {realtor.name}</ListGroupItem>
                                <ListGroupItem>Phone: {realtor.phone}</ListGroupItem>
                                <ListGroupItem>Email: {realtor.email}</ListGroupItem>
                            </ListGroup>
                            <Card.Body>
                                <p>{realtor.description}</p>
                            </Card.Body>
                        </Card>
                    </Col>
                    
                </Row>   
                {displayInteriorImages()}
            </Container>
        </div>
    )
}
export default ListingDetail