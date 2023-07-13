import React from 'react';

import Header from '../compon/header';
import Footer from '../compon/footer'

import {Helmet} from 'react-helmet-async';
const Timeline = () => {
    return (
        <>
            <Helmet>
                <title>Timeline page</title>
                <meta name='About' content='Coming Soon'/>
            </Helmet>
            <Header />
            <main>
            <h2 className="titel">
                This scetion will coming soon,....
            </h2>
            </main>
            <Footer />
        </>
    );
}


export default Timeline;