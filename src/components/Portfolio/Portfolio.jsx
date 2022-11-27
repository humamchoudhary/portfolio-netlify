import React from 'react'
import "./portfolio.css"
import { Projects } from "../../projects.js"
import { HashLink } from 'react-router-hash-link'

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5 className="text-light">My Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {Projects.map((data, key) => {
          return (
            <article className='portfolio__item'>
              <div className="portfolio__item__img">
                <img src={data.img} alt="Al Kitab" />
              </div>
              <h3>{data.name}</h3>
              <h5 className="text-light">{data.type}  |  {data.lang}</h5>
              <div className="portfolio__item__cta">
                <a href={data.gitlink} className="btn">GitHub</a>
                <a href={data.demolink} className="btn btn-primary" target="_blank">Live Demo</a>
              </div>
            </article>
          )
        })}



      </div>
      <HashLink className='moreprojects btn btn-primary' to="/Portfolio/Portfolio/#">More Projects</HashLink>

    </section>
  )
}

export default Portfolio