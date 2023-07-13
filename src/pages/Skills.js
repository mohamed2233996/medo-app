import React from 'react';

import Header from '../compon/header';
import Footer from '../compon/footer'

import {Helmet} from 'react-helmet-async';
const Skills = () => {
    return (
        <>
            <Helmet>
                <title>Skills page</title>
                <meta name='About' content='Our Skills'/>
            </Helmet>
            <Header />
            <main>
            <h2 className="titel">
                Skills Page
            </h2>
            </main>
            <Footer />
        </>
    );
}

export default Skills;
