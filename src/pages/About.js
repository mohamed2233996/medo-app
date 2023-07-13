
import React from 'react';

import Header from '../compon/header';
import Footer from '../compon/footer'

import {Helmet} from 'react-helmet-async';

const About = () => {
    return (
        <>
            <Helmet>
                <title>About page</title>
                <meta name='About' content='Our infotmation'/>
            </Helmet>
            <Header />
            <main>
            <h2 className="titel">
                About Page
            </h2>
            </main>
            <Footer />
        </>
    );
}

export default About;
