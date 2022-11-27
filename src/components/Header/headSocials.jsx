import React from 'react'
import { FiLinkedin } from 'react-icons/fi'
import { FiGithub } from 'react-icons/fi'
import { FiTwitter } from 'react-icons/fi'

const HeadSocials = () => {
    return (
        <div className='header__socials'>
            <a href="https://www.linkedin.com/in/mhumamch/" target="_blank"><FiLinkedin /></a>
            <a href="https://github.com/humamchoudhary" target="_blank"><FiGithub /></a>
            <a href="https://twitter.com/humam_cho" target="_blank"><FiTwitter /></a>
        </div>
    )
}

export default HeadSocials