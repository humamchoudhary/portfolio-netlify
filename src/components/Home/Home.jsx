import React from 'react'
import Header from '../Header/Header'
import Nav from "../Nav/Nav"
import About from "../about/About"
import Experience from "../Experience/Experience"
import Contact from "../contacts/Contact"
import Portfolio from "../Portfolio/Portfolio"
import Footer from "../footer/Footer"
import Services from "../Services/Service"
const Home = () => {
    console.log(window.location.pathname);
    return (
        <>
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