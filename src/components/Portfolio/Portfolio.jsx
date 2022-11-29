import "./portfolio.css"
import { Projects } from "../../projects.js"
import { HashLink } from 'react-router-hash-link'

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5 className="text-light">My Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">

        {Projects.map((project) => {
          return (

            <article className='portfolio__item'>
              <HashLink to={`/Projects/${project.id}/#/`}>

                <div className="portfolio__item__img">
                  <img src={project.img} alt="Al Kitab" />
                </div>
                <h3>{project.name}</h3>
                <h5 className="text-light">{project.type}  |  {project.lang}</h5>
                <div className="portfolio__item__cta">
                  <a href={project.gitlink} className="btn">GitHub</a>
                  <a href={project.demolink} className="btn btn-primary" target="_blank" rel="noreferrer">Live Demo</a>
                </div>
              </HashLink>
            </article>
          )
        })}

      </div>
      <HashLink className='moreprojects btn btn-primary' to="/Portfolio/#">More Projects</HashLink>

    </section>
  )
}

export default Portfolio