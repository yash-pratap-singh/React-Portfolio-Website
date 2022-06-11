import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-img">
            <img src={ME} alt="me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
                <h5>Experience</h5>
                <small>Student</small>
            </article>
           
            
            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
                <h5>Projects</h5>
                <small>4 completed</small>
            </article>
          </div>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, quisquam?</p>

            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
