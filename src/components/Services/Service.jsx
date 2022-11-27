import React from 'react'
import "./service.css"
import { AiOutlineCheck } from "react-icons/ai"

const Services = () => {
    return (
        <section id="services">
            <h5 className="text-light">What I offer</h5>
            <h2>Services</h2>
            <div className="container services__container">
                {/* ======================= UI/Ux ==================== */}
                <article className="service">
                    <div className="service__head">
                        <h3>UI/UX Design</h3>
                    </div>
                    <ul className="service__list">
                        <li>
                            <AiOutlineCheck className='service__list__icon' />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, quam.</p>
                        </li>
                        <li>
                            <AiOutlineCheck className='service__list__icon' />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, quam.</p>
                        </li>
                        <li>
                            <AiOutlineCheck className='service__list__icon' />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, quam.</p>
                        </li>
                        <li>
                            <AiOutlineCheck className='service__list__icon' />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, quam.</p>
                        </li>
                    </ul>
                </article>


                {/* ======================= Web Dev ==================== */}
                <article className="service">
                    <div className="service__head">
                        <h3>Web/App Development</h3>
                    </div>
                    <ul className="service__list">
                        <li>
                            <AiOutlineCheck className='service__list__icon' />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, quam.</p>
                        </li>
                        <li>
                            <AiOutlineCheck className='service__list__icon' />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, quam.</p>
                        </li>
                        <li>
                            <AiOutlineCheck className='service__list__icon' />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, quam.</p>
                        </li>
                        <li>
                            <AiOutlineCheck className='service__list__icon' />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, quam.</p>
                        </li>
                    </ul>
                </article>


                {/* ======================= Graphic Design ==================== */}
                <article className="service">
                    <div className="service__head">
                        <h3>Graphic Design</h3>
                    </div>
                    <ul className="service__list">
                        <li>
                            <AiOutlineCheck className='service__list__icon' />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, quam.</p>
                        </li>
                        <li>
                            <AiOutlineCheck className='service__list__icon' />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, quam.</p>
                        </li>
                        <li>
                            <AiOutlineCheck className='service__list__icon' />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, quam.</p>
                        </li>
                        <li>
                            <AiOutlineCheck className='service__list__icon' />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, quam.</p>
                        </li>
                    </ul>
                </article>



            </div>
        </section>
    )
}

export default Services