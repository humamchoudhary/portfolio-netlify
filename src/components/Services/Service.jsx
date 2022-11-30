import React from 'react'
import "./service.css"
import { AiOutlineCheck } from "react-icons/ai"
import { Graphicsservices } from "../../services.js"
import { Backendservices } from "../../services.js"
import { Appservices } from "../../services.js"

const Services = () => {
    return (
        <section id="services">
            <h5 className="text-light">What I offer</h5>
            <h2>Services</h2>
            <div className="container services__container">
                {/* ======================= UI/Ux ==================== */}
                <article className="service">
                    <div className="service__head">
                        <h3>Design</h3>
                    </div>
                    <ul className="service__list">
                        {Graphicsservices.map((service,key) => {
                            return (
                                <article key={key}>
                                    <li key={key}>
                                        <AiOutlineCheck className='service__list__icon' />
                                        <p>{service.service}</p>
                                    </li>
                                </article>
                            )
                        })}
                    </ul>
                </article>


                {/* ======================= Web Dev ==================== */}
                <article className="service">
                    <div className="service__head">
                        <h3>Web Development</h3>
                    </div>
                    <ul className="service__list">
                        {Backendservices.map((service) => {
                            return (
                                <article>
                                    <li>
                                        <AiOutlineCheck className='service__list__icon' />

                                        <p>{service.service}</p>
                                    </li></article>
                            )
                        })}
                    </ul>
                </article>


                {/* ======================= Graphic Design ==================== */}
                <article className="service">
                    <div className="service__head">
                        <h3>Graphic Design</h3>
                    </div>
                    <ul className="service__list">
                        {Appservices.map((service) => {
                            return (
                                <article>
                                    <li>
                                        <AiOutlineCheck className='service__list__icon' />

                                        <p>{service.service}</p>
                                    </li></article>
                            )
                        })}
                    </ul>
                </article>



            </div>
        </section>
    )
}

export default Services