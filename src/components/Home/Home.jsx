import React from 'react'
import Header from '../Header/Header'
import Nav from "../Nav/Nav"
import About from "../about/About"
import Experience from "../Experience/Experience"
import Contact from "../contacts/Contact"
import Portfolio from "../Portfolio/Portfolio"
import Footer from "../footer/Footer"
import Services from "../Services/Service"
import { Helmet } from 'react-helmet-async'

const Home = () => {
    console.log(window.location.pathname);
    return (
        <>
            <Helmet>
                <meta name="description" content="Portfolio" />
                <link rel="canonical" href="/" />
            </Helmet>
            <Header />
            <Nav />
            <About />
            <Portfolio />
            <Experience />
            <Services />
            <Contact />
            <Footer />
        </>

    )
}

export default Home