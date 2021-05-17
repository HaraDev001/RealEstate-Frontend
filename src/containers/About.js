import React, { useState, useEffect, Fragment } from 'react';
import { Helemt } from 'react-helmet';
import axios from 'axios';
import House from '../assets/images/House.jpg';


const About = () => {

    const [topSeller, setTopSeller] = useState([]);
    const [realtors, setRealtors] = useState([]);

    useEffect(() => {
        axios.defaults.headers = {
            'Content-Type': 'application/json'
        }

        const getTopSeller = async () => {
            try {
                const res = await axios.get('/api/realtors/topseller');
                setTopSeller(res.data);
            }
            catch (err) {

            }
        }
        getTopSeller();
    }, []);

    useEffect(() => {
        axios.defaults.headers = {
            'Content-Type': 'application/json'
        }

        const getRealtors = async () => {
            try {
                const res = await axios.get('/api/realtors/');
                setRealtors(res.data);
            }
            catch (err) {

            }
        }
        getRealtors();
    }, []);

    const getAllRealtors = () => {
        let allRealtors = [];
        let results = [];

        realtors.map(realtor => {
            return allRealtors.push(
                <Fragment key={realtor.id}>
                    <div className='about__display'>
                        <img className='about__display__image' src={realtor.photo} alt='' />
                    </div>
                    <h3 className='about__realtor'>{realtor.name}</h3>
                    <p className='about__contact'>{realtor.phone}</p>
                    <p className='about__contact'>{realtor.eamil}</p>
                    <p className='about__contact'>{realtor.description}</p>
                </Fragment>
            )
        });

        for (let i = 0; i < realtors.length; i += 3) {
            results.push(
                <div key={i} className='row'>
                    <div className='col-1-of-3'>
                        {allRealtors[i]}
                    </div>
                    <div className='col-1-of-3'>
                        {allRealtors[i + 1] ? allRealtors[i + 1] : null}
                    </div>
                    <div className='col-1-of-3'>
                        {allRealtors[i + 2] ? allRealtors[i + 2] : null}
                    </div>
                </div>
            )
        }

        return results;
    }

    const getTopSeller = () => {
        let result = [];

        topSeller.map(seller => {
            return result.push(
                <Fragment key={seller.id}>
                    <div className='about__display'>
                        <img className='about__display__image' src={seller.photo} alt='' />
                    </div>
                    <h3 className='about__topseller'>Top Seller: </h3>
                    <p className='about__contact'>{seller.name}</p>
                    <p className='about__contact'>{seller.phone}</p>
                    <p className='about__contact'>{seller.eamil}</p>
                    <p className='about__contact'>{seller.description}</p>

                </Fragment>
            )
        })
        return result;
    }
    return (
        <main className='about'>
            <header className='about__header'>
                <h1 className='about__heading'>About Realest Estate</h1>
            </header>
            <section className='about__info'>
                <div className='row'>
                    <div className='col-3-4'>
                        <h2 className='about__subheading'>We find the perfect home for you</h2>
                        <p className='about__paragraph'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eros nunc, tincidunt id accumsan sed, 
                            ultricies nec metus. Cras et dapibus ante, sit amet cursus enim. Pellentesque eget tempus lectus. 
                            Vivamus tempus tempor commodo. Maecenas et neque id turpis dictum convallis ac id tellus. 
                            Sed hendrerit tempor ex, non ornare justo accumsan et. Nulla facilisi. Nam feugiat nunc sapien, ac ullamcorper odio pellentesque nec.
                            Integer sodales pretium urna ac efficitur. Nullam a gravida massa. 
                            Pellentesque placerat placerat nibh, id iaculis risus sagittis ac. 
                            Mauris velit ligula, ultricies scelerisque varius vel, ullamcorper nec lorem. Praesent hendrerit fringilla venenatis. 
                            Curabitur ut imperdiet enim. Vivamus mollis et orci quis rutrum. Aliquam egestas ante at vehicula dictum.
                        </p>
                        <div className='about__display'>
                            <img className='about__display__image' src={House} alt='' />
                        </div>
                        <p className='about__paragraph'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eros nunc, tincidunt id accumsan sed, 
                            ultricies nec metus. Cras et dapibus ante, sit amet cursus enim. Pellentesque eget tempus lectus. 
                            Vivamus tempus tempor commodo. Maecenas et neque id turpis dictum convallis ac id tellus. 
                            Sed hendrerit tempor ex, non ornare justo accumsan et. Nulla facilisi. Nam feugiat nunc sapien, ac ullamcorper odio pellentesque nec.
                            Integer sodales pretium urna ac efficitur. Nullam a gravida massa. 
                            Pellentesque placerat placerat nibh, id iaculis risus sagittis ac. 
                            Mauris velit ligula, ultricies scelerisque varius vel, ullamcorper nec lorem. Praesent hendrerit fringilla venenatis. 
                            Curabitur ut imperdiet enim. Vivamus mollis et orci quis rutrum. Aliquam egestas ante at vehicula dictum.
                        </p>
                    </div>
                    <div className='col-1-4'>
                        {getTopSeller()}
                    </div>
                </div>
            </section>
            <section className='about__team'>
                <div className='row'>
                    <h2 className='about__subheading'>Meet Our Team</h2>
                </div>
                {getAllRealtors()}
            </section>
        </main>
    )
}
export default About;