import React,{useState, useEffect} from 'react';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import CustomCard from '../components/CustomCard';
import CustomPagination from '../components/CustomPagination';
import {Row, Col, Container} from 'react-bootstrap';


const Listings = () => {
    const [listings, setListings] = useState([]);
    const [count, setCount] = useState(0);
    const [previous, setPrevious] = useState('');
    const [next, setNext] = useState('');
    const [active, setActive] = useState(1);

    useEffect(() => {
        window.scrollTo(0,0);

        const fetchData = async() => {
            try {
                const res = await axios.get('/api/listings/?page=1');
                setListings(res.data.results);
                setCount(res.data.count);
                setPrevious(res.data.previous);
                setNext(res.data.next)
            }
            catch (err) {

            }
        }
        fetchData();
    },[])

    const displayListings = () => {
        let display = [];
        let result = [];

        listings.map(listing => {
            return display.push(
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

        for (let i = 0; i < listings.length; i += 3) {
            result.push(
                <Row key={i}>
                    <Col>
                        {display[i]}
                    </Col> 
                    <Col>
                        {display[i+1] ? display[i+1] : null}
                    </Col> 
                    <Col>
                        {display[i+2] ? display[i+2] : null}
                    </Col> 
                </Row>
            )
        }
        return result;
    }

    const visitPage = (page) => {
        axios.get(`/api/listings/?page=${page}`)
        .then(res => {
            setListings(res.data.results);
            setPrevious(res.data.previous);
            setNext(res.data.next);
            setActive(page);
        })
        .catch(err => {});
    };

    const previous_number = () => {
        axios.get(previous)
        .then(res => {
            setListings(res.data.results);
            setPrevious(res.data.previous);
            setNext(res.data.next);
            if (previous)
                setActive(active-1);
        })
        .catch(err => {

        })
    };
    const next_number = () => {
        axios.get(next)
        .then(res => {
            setListings(res.data.results);
            setPrevious(res.data.previous);
            setNext(res.data.next);
            if (next)
                setActive(active+1);
        })
        .catch(err => {
            
        })
    }
    return(
        <main>
            <section>
                {displayListings()}
            </section>
            <section>
                <Row>
                    <CustomPagination 
                         itemsPerPage = {3}
                         count = {count}
                         visitPage = {visitPage}
                         previous = {previous_number}
                         next = {next_number}
                         active = {active}
                         setActive = {setActive}
                    />
                </Row>
            </section>
        </main>
    )
}
export default Listings;