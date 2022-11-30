import React from 'react'
import "./aboutdetails.css"
import ME from "../../assets/me.jpeg"

const Aboutdetails = () => {
    return (
        <section id="#">

            <div className="container about__me__header">
                <div className="about__me__header__text">
                    <h1>About me</h1>
                    <h3>I Love technology <br /> and Design</h3>
                </div>
                <div className="about__me__header__img">

                    <img src={ME} alt="About me" />
                </div>

            </div>
        </section>
    )
}

export default Aboutdetails