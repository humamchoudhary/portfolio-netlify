import React from 'react'
import "./footer.css"
import { BsFacebook } from "react-icons/bs"
import { AiFillInstagram } from "react-icons/ai"
import { AiFillLinkedin } from "react-icons/ai"
import { AiFillTwitterCircle } from "react-icons/ai"
import { HashLink } from 'react-router-hash-link'
const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Muhammad Humam</a>
      <ul className="permalinks">
        <li><HashLink to="/#">Home</HashLink></li>
        <li><HashLink to="/#about">About</HashLink></li>
        <li><HashLink to="/#portfolio">Portfolio</HashLink></li>
        <li><HashLink to="/#experience">Experience</HashLink></li>
        <li><HashLink to="/#services">Services</HashLink></li>
        <li><HashLink to="/#contact">Contact</HashLink></li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com/humam.ch.75"><BsFacebook /></a>
        <a href="https://www.instagram.com/humam_cho.02/"><AiFillInstagram /></a>
        <a href="https://twitter.com/humam_cho"><AiFillTwitterCircle /></a>
        <a href="https://www.linkedin.com/in/mhumamch/"><AiFillLinkedin /></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Muhammad Humam Choudhary, All rights reserved. </small>
      </div>
    </footer>
  )
}

export default Footer