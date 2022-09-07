import React from 'react';
import './footer.css'
import { BsInstagram } from 'react-icons/bs'

const Footer = () => {
   return (
      <footer>
         <a href="#" className='footer__logo'>Vitaliy</a>
         <ul className='permalinks'>
            <li> <a href="#">Home</a></li>
            <li> <a href="#about">About</a></li>
            <li> <a href="#experience">Experience</a></li>
            <li> <a href="#portfolio">Portfolio</a></li>
            <li> <a href="#feedback">Feedback</a></li>
            <li> <a href="#contact">Contact</a></li>

         </ul>

         <div className="footer__socials">
            <a href="https://vk.com/" >Vk</a>
            <a href="https://www.instagram.com/" target='_blanck'> <BsInstagram /></a>
         </div>

         <div className="footer__copyright">
            <small>&copy; Vitaliy Tutorials. All rights reserved</small>
         </div>
      </footer>
   );
}

export default Footer;