import React from 'react';
import './contact.css'
import { HiOutlineMailOpen } from 'react-icons/hi'
import { RiWhatsappLine } from 'react-icons/ri'
import { TbBrandTelegram } from 'react-icons/tb'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
   const form = useRef();
   const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_qsx59cw', 'template_uiw54ic', form.current, '_p-3-XY_jz3yrvzYN')
      e.target.reset();

    };
  
   return (
      <section id='contact'>
         <h5>Get In Touch</h5>
         <h2>Contact Me</h2>

         <div className="container contact__container">
            <div className="contact__options">
               <atticle className="contact__option">
                  <HiOutlineMailOpen className='contact__option-icon' />
                  <h4>Email</h4>
                  <h5>46vkryukov@gmail.com</h5>
                  <a href="mailto: 46vkryukov@gmail.com" target='_blanck'>Send a message</a>
               </atticle>
               <atticle className="contact__option">
                  <RiWhatsappLine className='contact__option-icon' />
                  <h4>WhatsApp</h4>
                  <h5>+79360020192</h5>
                  <a href="https://api.whatsapp.com/send?phone=+79360020192" target='_blanck'>Send a message</a>
               </atticle>
               <atticle className="contact__option">
                  <TbBrandTelegram className='contact__option-icon' />
                  <h4>Telegram</h4>
                  <h5>+79360020192</h5>
                  <a href="https://web.telegram.org/z/" target='_blanck'>Send a message</a>
               </atticle>
            </div>
            {/*END OF CONTACT*/}
            <form ref={form} onSubmit={sendEmail}>
               <input type="text" name='name' placeholder='Your Full Name' required />
               <input type="email" name='email' placeholder='Your Email' required />
               <textarea name="message" rows="7" placeholder='Your Message' required ></textarea>
               <button type='submit' className='btn btn-primary'>Send Message</button>
            </form>
         </div>
      </section>
   );
}

export default Contact;
