import React from 'react'
import "./portfoliodetails.css"
import { AllProjects } from "../../projects.js"
import { IoArrowBack } from "react-icons/io5"
import Footer from "../footer/Footer"
import { BiUpArrowAlt } from 'react-icons/bi'
import { HashLink } from 'react-router-hash-link'

const PortFolioDetails = () => {
    return (

        <section id='#'>
            <HashLink to="#">
                <BiUpArrowAlt className='upIcon' />

            </HashLink>
            <HashLink to="/Portfolio/#portfolio">
                <IoArrowBack className='back' />
            </HashLink>
            <h5 className="text-light headline">All Of My Work</h5>
            <h2 className='headline'>Portfolio</h2>

            <div className="container allportfolio__container">
                {AllProjects.map((data, key) => {
                    return (
                        <article className='allportfolio__item'>
                            <div className="allportfolio__item__img">
                                <img src={data.img} alt="Al Kitab" />
                            </div>
                            <h3>{data.name}</h3>
                            <h5 className="text-light">{data.type}  |  {data.lang}</h5>
                            <div className="allportfolio__item__cta">
                                <a href={data.gitlink} className="btn">GitHub</a>
                                <a href={data.demolink} className="btn btn-primary" target="_blank">Live Demo</a>
                            </div>
                        </article>
                    )
                })}


            </div>
            <Footer />

        </section>

    )
}

export default PortFolioDetails