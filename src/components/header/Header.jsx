import React from 'react';
import './header.css'
import CTA from './CTA';
import ME from '../../assets/me-oi.png'
import HeaderSocials from './HeaderSocials';

const Header = () => {
   return (
      <header>
         <div className="container header__container">
            <h5>Hello i'm</h5>
            <h1>Vitalliy Kryukov</h1>
            <h5 className="text-light">Frontend Developer</h5>
            <CTA />
            <HeaderSocials />

            <div className="me">
               <img src={ME} alt="me" />
            </div>
         
            <a href="#contacts" className='scroll__down'> Scroll Down</a>
            </div>
      </header>
   )
}

export default Header;
