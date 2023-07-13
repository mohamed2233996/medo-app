import React from 'react';

import Header from '../compon/header';
import Footer from '../compon/footer'

import {Helmet} from 'react-helmet-async';

const Gallery = () => {
    return (
        <>
            <Helmet>
                <title>Gallery page</title>
                <meta name='About' content='Our img'/>
            </Helmet>
            <Header />
            <main>
            <h2 className="titel">
                Gallery Page
            </h2>
            </main>
            <Footer />
        </>
    );
}

export default Gallery;
