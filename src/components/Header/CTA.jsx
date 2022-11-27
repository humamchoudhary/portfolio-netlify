import React from 'react'
import { HashLink } from 'react-router-hash-link'
import CV from "../../assets/CV.pdf"

const CTA = () => {
  return (
    <div className='cta'>
        <HashLink to={CV} download className='btn'>Download CV</HashLink>
        <HashLink to="#contact" className='btn btn-primary'>Let's Talk</HashLink>
    </div>
  )
}

export default CTA