import React from "react";
import { useParams } from "react-router-dom";
import "./projectdetails.css";
import { AllProjects } from "../../projects.js";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const ProjectDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  window.scrollTo(0, 0);
  return (
    <>
      <section id="#" className="container__project__items">
        <Helmet>
          <meta name="description" content="Portfolio details" />
          <link rel="canonical" href="/Project" />
        </Helmet>

        {AllProjects.map((project) => {
          return project.id == id ? (
            <article className="project__item">
              <BiArrowBack className="back" onClick={() => navigate(-1)} />
              <div className="project__header">
                <div className="project__header__text">
                  <h3>{project.name}</h3>
                  <h5 className="text-light">
                    {project.subline} | {project.lang}
                  </h5>
                  <div className="project__item__cta">
                    <a href={project.gitlink} className="btn">
                      GitHub
                    </a>
                    <a
                      href={project.demolink}
                      className="btn btn-primary"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
                <div className="project__item__img">
                  <img src={project.img} alt="Al Kitab" />
                </div>
              </div>
              <div className="project__details">
                <div className="container">
                  <div className="project__details__header">
                    <div className="project__details__header__item">
                      <h1>Role</h1>
                      <p>{project.role}</p>
                    </div>
                    <div className="project__details__header__item">
                      <h1>Language</h1>
                      <p>{project.lang}</p>
                    </div>
                    <div className="project__details__header__item">
                      <h1>Project Type</h1>
                      <p>{project.type}</p>
                    </div>
                  </div>
                  <div className="details__body">
                    <div className="details-img1">
                      <img src={project.img2} alt="" />
                    </div>
                    <div className="details">
                      <div className="line"></div>
                      <h1>Details</h1>
                      <p>{project.details}</p>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ) : (
            ""
          );
        })}
      </section>
    </>
  );
};

export default ProjectDetails;
