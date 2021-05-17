import React, { useState } from 'react';
import ListingForm from '../components/ListingForm';
import Listings from '../components/Listings';
import CustomPagination from '../components/CustomPagination';
import { Helmet } from 'react-helmet';

const Home = () => {

    const [ listing, setListing ] = useState([]);
    const [ currentPage, setCurrentPage ] = useState(1);
    const [ listingPerPage, setListingPerPage ] = useState(3);
    const [ active, setActive ] = useState(1);

    const indexOfLastListing = currentPage * listingPerPage;
    const indexOfFirstListing = indexOfLastListing - listingPerPage;
    const currentListing = listing.slice(indexOfFirstListing, indexOfLastListing);

    const visitPage = (page) => {
        setCurrentPage(page);
        setActive(page);
    }
    const previous_number = () => {
        if (currentPage != 1){
            setCurrentPage(currentPage-1);
            setActive(currentPage-1);
        }
    }
    const next_number = () => {
        if (currentPage != Math.ceil(listing.length/3)){
            setCurrentPage(currentPage+1);
            setActive(currentPage+1);
        }
    }
    return(
        <main className='home' >
            <Helmet>
                <title>Realest Estate - Home</title>
                <meta 
                    name='description'
                    content='Realest Estate Home Page'
                />
            </Helmet>
            <section style={{padding:'10px'}}>
                <ListingForm setListing={setListing}/>
            </section>
            <section style={{padding:'10px'}}>
                <Listings listings={currentListing}/>
            </section>
            <section style={{padding:'10px'}}>
                <div className='row'>
                    {
                        listing.length !== 0 ? (
                            <CustomPagination
                                itemsPerPage = {listingPerPage}
                                count = {listing.length}
                                visitPage = {visitPage}
                                previous = {previous_number}
                                next = {next_number}
                                active = {active}
                                setActive = {setActive}
                            />
                        ):null
                    }
                </div>
            </section>
        </main>
    )
}
export default Home;