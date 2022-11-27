import React from 'react'
import "./Experience.css"
import { FiCheckSquare } from "react-icons/fi"

const Experience = () => {
  return (
    <section id="experience">
      <h5 className='text-light'>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">


        {/* ===================== FONTEND DEV ======================= */}

        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">

              <FiCheckSquare className='exp_de_icons' />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Expert</small>
              </div>
            </article>

            <article className="experience__details">
              <FiCheckSquare className='exp_de_icons' />
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Expert</small>
              </div>
            </article>

            <article className="experience__details">
              <FiCheckSquare className='exp_de_icons' />
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <FiCheckSquare className='exp_de_icons' />
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <FiCheckSquare className='exp_de_icons' />
              <div>
                <h4>Flutter</h4>
                <small className='text-light'>Expert</small>
              </div>
            </article>

            <article className="experience__details">
              <FiCheckSquare className='exp_de_icons' />
              <div>
                <h4>Tailwind</h4>
                <small className='text-light'>Expert</small>
              </div>
            </article>

            <article className="experience__details">
              <FiCheckSquare className='exp_de_icons' />
              <div>
                <h4>React</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

          </div>
        </div>

        {/* ===================== BACKEND DEV ======================= */}
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">

              <FiCheckSquare className='exp_de_icons' />
              <div>
                <h4>Python</h4>
                <small className='text-light'>Expert</small>
              </div>
            </article>
            <article className="experience__details">

              <FiCheckSquare className='exp_de_icons' />
              <div>
                <h4>Java</h4>
                <small className='text-light'>Expert</small>
              </div>
            </article>

            <article className="experience__details">
              <FiCheckSquare className='exp_de_icons' />
              <div>
                <h4>Firebase</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <FiCheckSquare className='exp_de_icons' />
              <div>
                <h4>Node Js</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <FiCheckSquare className='exp_de_icons' />
              <div>
                <h4>PHP</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>

            <article className="experience__details">
              <FiCheckSquare className='exp_de_icons' />
              <div>
                <h4>MySQL</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>
          </div>

        </div>

        {/* ===================== Designing ======================= */}

        <div className="experience__design">
          <h3>Designing</h3>
          <div className="experience__content">
            <article className="experience__details">

              <FiCheckSquare className='exp_de_icons' />
              <div>
                <h4>Adobe XD</h4>
                <small className='text-light'>Expert</small>
              </div>
            </article>

            <article className="experience__details">
              <FiCheckSquare className='exp_de_icons' />
              <div>
                <h4>Adobe Illistrator</h4>
                <small className='text-light'>Expert</small>
              </div>
            </article>

            <article className="experience__details">
              <FiCheckSquare className='exp_de_icons' />
              <div>
                <h4>Adobe PhotoShop</h4>
                <small className='text-light'>Expert</small>
              </div>
            </article>

            <article className="experience__details">
              <FiCheckSquare className='exp_de_icons' />
              <div>
                <h4>Adobe After Effects</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <FiCheckSquare className='exp_de_icons' />
              <div>
                <h4>Adobe Preimer Pro</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience