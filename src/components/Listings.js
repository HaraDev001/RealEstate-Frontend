import React from 'react';
import CustomCard from './CustomCard';
import {Row, Col} from 'react-bootstrap';

const Listings = ({ listings }) => {  
    const getListings = () => {
        let listingsOnPage = [];
        let result = [];

        listings.map(listing => {
            return listingsOnPage.push(
                <CustomCard 
                    title={listing.title}
                    address={listing.address}
                    city={listing.city}
                    state={listing.state}
                    price={listing.price}
                    home_type={listing.home_type}
                    sale_type={listing.sale_type}
                    bedrooms={listing.bedrooms}
                    bathrooms={listing.bathrooms}
                    sqft={listing.sqft}
                    photo_main={listing.photo_main}
                    slug={listing.slug}
                />
            )
        });
        for (let i = 0; i< listings.length; i += 3) {
            result.push(
                <Row>
                    <Col>
                        {listingsOnPage[i]}
                    </Col>
                    <Col>
                        {listingsOnPage[i+1] ? listingsOnPage[i+1] : null }
                    </Col>
                    <Col>
                        {listingsOnPage[i+2] ? listingsOnPage[i+2] : null }
                    </Col>
                </Row>
            )
        }
        return result;
    }
    return(
        <div>
            {getListings()}
        </div>
    )
}
export default Listings;