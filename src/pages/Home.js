import React from 'react';

import Header from '../compon/header';
import Footer from '../compon/footer'

import {Helmet} from 'react-helmet-async';

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Home page</title>
                <meta name='About' content='Our infotmation'/>
            </Helmet>
            <Header />
            <main>
            <h2 className="titel">
                Home Page
            </h2>
            </main>
            <Footer />
        </>
    );
}

export default Home;
