import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {ImDribbble} from 'react-icons/im'


const HeaderSocials = () => {
   return (
      <div className='header__socials'>
         <a href="http://linkedin.com" target="-blank"> <BsLinkedin /> </a>
         <a href="http://gitgub.com" target="-blank"> <BsGithub/></a>

      </div>
   )
}

export default HeaderSocials