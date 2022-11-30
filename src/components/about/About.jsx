import React from 'react'
import "./About.css"
import ME from "../../assets/me2.jpeg"
import { FiAward } from "react-icons/fi"
import { FiUsers } from "react-icons/fi"
import { VscFolderLibrary } from "react-icons/vsc"
import { HashLink } from 'react-router-hash-link'

const About = () => {
  return (
    <section id="about">
      <h5 className='text-light'>Get to know me</h5>
      <h2>About me</h2>






      <div className="container about__container">
        <div className="about__me">
          <img src={ME} className="about__me__image" alt="About" />
        </div>

        <div className="about__content">
          <div className="about__cards">

            <article className="about__card">
              <FiAward className='about__icon' />
              <h5 className="light-text">Experience</h5>
              <small>5+ Years Working</small>
            </article>

            <article className="about__card">
              <FiUsers className='about__icon' />
              <h5 className="light-text">Clients</h5>
              <small>10+ Clients WorldWide</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className='about__icon' />
              <h5 className="light-text">Porjects</h5>
              <small>50+ Completed</small>
            </article>
          </div>

          <p>
            I am a <strong>FullStack</strong> & <strong>Game developer</strong> , based in Pakistan. I am very passionate about gaming, designing and developing app, website and games.
            <br />
            A perfectionist, Team leader and a problem solver. Fan of gaming, tech and TV shows.
            <br />
            Interested in AI and Game development
          </p>
          <div className="cta-about">

            <HashLink to="#contact" className='btn btn-primary'>Let's Talk</HashLink>
            <HashLink to="/About-me" className='btn'>More about me</HashLink>
          </div>

        </div>
      </div>
    </section>
  )
}

export default About