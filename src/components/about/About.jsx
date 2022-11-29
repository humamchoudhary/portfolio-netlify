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
      <h5 className='text-light'>Get to know</h5>
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
            I have always been intrested in science and technology. After 9th grade I got involved into computers and immediately I knew what I was going to take forward, However
            due to the limited knowledge I had of programming and computers there wasnt much that I could do in that time. My real programming journey began in
            the covid due to the free time I had to learn programming myself. Computers in general provides me a gateway to unlimited possibilities and a way to
            express myself however I want to. Spending hours on it and not even getting tired despite how hard the task is. After a while I discovered game development, Web development
            and AI but didnt divided into it as i thought at the time that I donot have much knowledge to work with them but as time passed on I started to realized how
            easy and small they were.
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