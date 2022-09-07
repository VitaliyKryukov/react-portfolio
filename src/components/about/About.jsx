import React from 'react';
import './about.css'
import ME from '../../assets/Me-aboutt.jpg'
import { BsAwardFill } from 'react-icons/bs'
import { FiUsers } from 'react-icons/fi'
import { AiFillProject } from 'react-icons/ai'


const About = () => {
   return (
      <section id='about'>
         <h5>Get To Know</h5>
         <h2>About Me</h2>

         <div className="container about__container">
            <div className="about__me">
               <div className="about__me-image">
                  <img src={ME} alt="About Image" />
               </div>

            </div>

            <div className="about__content">
               <div className="about__cards">
                  <article className='about__card'>
                     <BsAwardFill className='about__icon' />
                     <h5>Experience</h5>
                     <small>1+ Years Working </small>
                  </article>
                  <article className='about__card'>
                     <FiUsers className='about__icon' />
                     <h5>Clients</h5>
                     <small> 10+ Satisfied people </small>
                  </article>
                  <article className='about__card'>
                     <AiFillProject className='about__icon' />
                     <h5>Projects</h5>
                     <small>10 + Complited Projects</small>
                  </article>
               </div>

               <p>I am engaged in web development, I fell in love with this business from the very beginning, I am always interested in something new, I get great pleasure from life, I am always glad to meet you.
               </p>

               <a href="#conatct" className='btn btn-primary'> Lets's Talk </a>

            </div>
         </div>
      </section>
   );
}

export default About;
